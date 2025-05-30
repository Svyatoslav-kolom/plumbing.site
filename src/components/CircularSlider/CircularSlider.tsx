import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';

interface CircularSliderProps {
  value: number;
  onChange: (value: number) => void;
  size?: number;
  strokeWidth?: number;
  min?: number;
  max?: number;
}

const CircularSlider: React.FC<CircularSliderProps> = ({
  value,
  onChange,
  size = 200,
  strokeWidth = 10,
  min = 0,
  max = 100,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const center = size / 2;

  const valueToAngle = useCallback((val: number) => ((val - min) / (max - min)) * 360, [min, max]);
  const angleToValue = useCallback((angle: number) => Math.round((angle / 360) * (max - min) + min), [min, max]);

  const polarToCartesian = useCallback((angle: number) => {
    const radians = ((angle - 90) * Math.PI) / 180.0;
    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  }, [center, radius]);

  const updateValueFromXY = useCallback((clientX: number, clientY: number) => {
    const svg = circleRef.current?.ownerSVGElement;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = clientX - rect.left - center;
    const y = clientY - rect.top - center;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    const adjustedAngle = angle < 0 ? angle + 360 : angle;
    const newValue = angleToValue(adjustedAngle);

    if (newValue !== valueRef.current) {
      onChange(newValue);
    }
  }, [angleToValue, center, onChange]);

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log('mousedown');
    setIsDragging(true);
    updateValueFromXY(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<SVGSVGElement>) => {
    setIsDragging(true);
    const touch = e.touches[0];
    updateValueFromXY(touch.clientX, touch.clientY);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) updateValueFromXY(e.clientX, e.clientY);
  }, [isDragging, updateValueFromXY]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault(); // запобігає скролу
      updateValueFromXY(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [isDragging, updateValueFromXY]);

  const stopDragging = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);

  const angle = useMemo(() => valueToAngle(value), [value, valueToAngle]);
  const { x, y } = useMemo(() => polarToCartesian(angle), [angle, polarToCartesian]);
  const strokeDashoffset = useMemo(() => circumference - (angle / 360) * circumference, [angle, circumference]);

  return (
    <svg
      width={size}
      height={size}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ cursor: 'pointer', userSelect: 'none', touchAction: 'none' }}
    >
      <circle
        ref={circleRef}
        cx={center}
        cy={center}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#007aff"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <circle cx={x} cy={y} r={strokeWidth} fill="#fff" stroke="#007aff" strokeWidth="2" />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dy=".3em"
        fontSize="20"
        fill="#333"
      >
        {value}
      </text>
    </svg>
  );
};

export default CircularSlider;
