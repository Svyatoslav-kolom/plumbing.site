import { Box, Stack, Text } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import type { RepairFormData } from "../../../types/formData";
import CircularSlider from '@fseehawer/react-circular-slider';

interface Step2Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
}

export default function Step2({ setFormData }: Step2Props) {

  return (
    <Box>
      <Text
        textStyle={"blockTitle"}
        mb={4}
        textAlign={"center"}
        w={"100%"}
      >
        Укажите площадь помещения
      </Text>

      <Stack
        textStyle="text"
        bg={"blocks.secondary"}
        px={"30px"}
        py={"15px"}
        borderRadius={"10px"}
        mb={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize="md" mb="8px">Площа (м²)</Text>

        <CircularSlider
          data={Array.from({ length: 101 }, (_, i) => i)} // від 0 до 100 м²
          // value={formData.area || 0} // початкове значення з formData
          onChange={(value) => {
            const num = Number(value);
            if (!isNaN(num)) {
              setFormData(prev => ({ ...prev, area: num }));
            }
          }}
          knobColor="#FFFFFF" // Білий knob
          knobSize={38}
          progressColorFrom={"var(--chakra-colors-accent-main)"}
          progressColorTo={"var(--chakra-colors-accent-main)"}
          trackColor={"var(--chakra-colors-layout-dark)"}
          trackSize={38}
          progressSize={38}
          label="" // Вимикаємо внутрішній лейбл
          valueFontSize="40px"
          labelColor="black"
        />
      </Stack>
    </Box>
  );
}


{/* 
      <Text mb={2}>Площадь помещения (м²):</Text>
      <NumberInput.Root
        min={1}
        max={500}
        step={1}
        value={String(formData.area ?? 0)} // ← тут string
        onValueChange={(details) => {
          const value = details.valueAsNumber;
          if (!isNaN(value)) {
            setFormData(prev => ({ ...prev, area: value }));
          }
        }}
      >
        <NumberInput.Label>Площадь помещения</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.IncrementTrigger />
          <NumberInput.DecrementTrigger />
        </NumberInput.Control>
        <NumberInput.Scrubber />
      </NumberInput.Root>

      <Text mt={4} mb={2}>Высота потолков (м):</Text>
      <NumberInput.Root
        min={2}
        max={5}
        step={0.1}
        value={String(formData.ceilingHeight ?? 0)} // ← тут теж string
        onValueChange={(details) => {
          const value = details.valueAsNumber;
          if (!isNaN(value)) {
            setFormData(prev => ({ ...prev, ceilingHeight: value }));
          }
        }}
      >
        <NumberInput.Label>Высота потолков</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.IncrementTrigger />
          <NumberInput.DecrementTrigger />
        </NumberInput.Control>
        <NumberInput.Scrubber />
      </NumberInput.Root> */}