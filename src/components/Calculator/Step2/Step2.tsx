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

  const isMobile = useBreakpointValue({ base: 233, md: 270 });

  return (
    <Box>
      <Text textStyle="blockTitle" mb={4} textAlign="center" w="100%">
        Укажите площадь помещения
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
        <Text fontSize="md" mb="8px">
          Площа (м²)
        </Text>

        <Box position="relative">
          <Box
            key={formData.area}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // важливо!
            }}
          >
            <Text textStyle={"blockTitle"}>
              {formData.area} м²
            </Text>
          </Box>

          {/* Кружок-слайдер */}
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
