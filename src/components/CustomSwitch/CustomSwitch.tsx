import { useState } from 'react'
import './CustomSwitch.css'

type CustomSwitchProps = {
  size?: number;
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  ariaLabel?: string

  bgOff?: string
  bgOn?: string
  dotColor?: string
  innerDotOff?: string
  innerDotOn?: string
  innerBorderOff?: string
  innerBorderOn?: string

  iconOn?: React.ReactNode
  iconOff?: React.ReactNode
  iconSize?: number
}

export const CustomSwitch = ({
  size = 20,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  ariaLabel = 'Switch',

  bgOff = '#D9D9D9',
  bgOn = '#D9D9D9',
  dotColor = '#F0902A',
  innerDotOff = '#D9D9D9',
  innerDotOn = '#D9D9D9',

  iconOn,
  iconOff,
  iconSize = size * 0.8,
}: CustomSwitchProps) => {
  const isControlled = checked !== undefined
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isChecked = isControlled ? checked : internalChecked

  const switchHeight = size
  const switchWidth = size * 2.8
  const dotSize = size * 1.4
  const topOffset = `-${(dotSize - switchHeight) / 2}px`
  const dotTranslate = `${dotSize}px`

  const handleCheckboxChange = () => {
    if (disabled) return
    if (!isControlled) setInternalChecked(!isChecked)
    onChange?.(!isChecked)
  }

  return (
    <label
      className={`switch-container ${disabled ? 'disabled' : ''}`}
      style={{
        '--switch-height': `${switchHeight}px`,
        '--switch-width': `${switchWidth}px`,
        '--dot-size': `${dotSize}px`,
        '--switch-top-offset': topOffset,
        '--dot-translate': dotTranslate,
        '--switch-bg-off': bgOff,
        '--switch-bg-on': bgOn,
        '--dot-color': dotColor,
        '--inner-dot-off': innerDotOff,
        '--inner-dot-on': innerDotOn,
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? 0.6 : 1,
      } as React.CSSProperties}
    >
      <div className='switch-wrapper'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          className='switch-input'
          aria-label={ariaLabel}
        />
        <div className={`switch-box ${isChecked ? 'checked' : ''}`}></div>

        <div className={`switch-dot ${isChecked ? 'checked' : ''}`}>
          <span className={`switch-inner-dot ${isChecked ? 'checked' : ''}`}>
            {(isChecked && iconOn) || (!isChecked && iconOff) ? (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: iconSize,
                  height: iconSize,
                }}
              >
                {isChecked ? iconOn : iconOff}
              </span>
            ) : null}
          </span>
        </div>
      </div>
    </label>
  )
}
