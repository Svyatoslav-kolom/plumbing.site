import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Slider } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import type { RepairFormData } from "../../../types/formData";

interface Step3Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
}

export default function Step3({ formData, setFormData }: Step3Props) {
  const handleRoomSelect = (value: number) => {
    setFormData((prev) => ({ ...prev, rooms: value }));
  };

  return (
    <VStack>
      {/* Заголовок секції */}
      <Text
        textStyle="blockTitle"
        mb={4}
        textAlign="center"
        w="100%"
      >
        Wskaż parametry pomieszczenia
      </Text>

      {/* Висота стелі */}
      <VStack
        textStyle="text"
        bg="blocks.secondary"
        px={{ base: "20px", md: "30px" }}
        py="15px"
        borderRadius="10px"
        mb="10px"
        w="100%"
        alignItems="flex-start"
      >
        <Text>
          Wysokość sufitu (m)
        </Text>

        <Text color="text.grayDark">
          {formData.ceilingHeight} m
        </Text>

        <Slider.Root
          width="100%"
          defaultValue={[40]}
          min={2}
          max={5}
          step={0.1}
          value={[formData.ceilingHeight]}
          onValueChange={({ value }) =>
            setFormData((prev) => ({ ...prev, ceilingHeight: value[0] }))
          }
        >
          <Slider.Control>
            <Slider.Track height="15px">
              <Slider.Range bg="accent.main" />
            </Slider.Track>
            <Slider.Thumbs
              bg="white"
              borderColor="accent.main"
              borderWidth="6px"
              height="1.5rem"
              w="1.5rem"
            />
          </Slider.Control>
        </Slider.Root>
      </VStack>

      {/* Кількість кімнат */}
      <Box
        textStyle="text"
        bg="blocks.secondary"
        px={{ base: "20px", md: "30px" }}
        py="15px"
        borderRadius="10px"
        mb="10px"
        w="100%"
        alignItems="flex-start"
      >
        <Text mb={2}>Liczba pokoi</Text>

        <HStack gap={4}>
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              borderRadius="full"
              boxSize={{ base: "50px", md: "60px" }}
              bg="white"
              color="text.grayDark"
              border="7px solid"
              borderColor={formData.rooms === num ? "accent.main" : "layout.dark"}
              onClick={() => handleRoomSelect(num)}
            >
              {num === 4 ? "4+" : num}
            </Button>
          ))}
        </HStack>
      </Box>
    </VStack>
  );
}
