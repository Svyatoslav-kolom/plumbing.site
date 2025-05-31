import { Box, Stack, Text, useBreakpointValue, useToken } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import type { RepairFormData } from "../../../types/formData";
import CircularSlider from "react-circular-slider-svg";

interface Step2Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
  swiperRef: React.RefObject<any>;
}

export default function Step2({ setFormData, formData, swiperRef }: Step2Props) {
  // Вимикаємо свайп при взаємодії з повзунком
  const handleTouchStart = () => {
    swiperRef.current?.allowTouchMove && (swiperRef.current.allowTouchMove = false);
  };

  const handleTouchEnd = () => {
    swiperRef.current && (swiperRef.current.allowTouchMove = true);
  };

  const [accentColor, layoutDarkColor] = useToken("colors", [
    "accent.main",
    "layout.dark",
  ]);

  // Задаємо розмір слайдера в залежності від брейкпоінта
  const isMobile = useBreakpointValue({ base: 233, md: 270 });

  return (
    <Box>
      {/* Заголовок блоку */}
      <Text textStyle="blockTitle" mb={4} textAlign="center" w="100%">
        Wybierz metraż
      </Text>

      <Stack
        textStyle="text"
        bg="blocks.secondary"
        px="30px"
        py="15px"
        borderRadius="10px"
        mb="10px"
        alignItems="center"
        justifyContent="center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Підпис до повзунка */}
        <Text fontSize="md" mb="8px">
          Powierzchnia (m²)
        </Text>

        <Box position="relative">
          {/* Вивід значення поверх слайдера */}
          <Box
            key={formData.area}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // важливо — не блокує слайдер
            }}
          >
            <Text textStyle="blockTitle">
              {formData.area} m²
            </Text>
          </Box>

          {/* Кружок-слайдер для вибору площі */}
          <CircularSlider
            size={isMobile}
            handleSize={22}
            minValue={0}
            maxValue={100}
            trackWidth={20}
            arcColor={accentColor}
            arcBackgroundColor={layoutDarkColor}
            angleType={{
              direction: "cw",
              axis: "-y",
            }}
            handle1={{
              value: formData.area || 0,
              onChange: (val: number) => {
                setFormData((prev) => ({
                  ...prev,
                  area: Math.round(val),
                }));
              },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
