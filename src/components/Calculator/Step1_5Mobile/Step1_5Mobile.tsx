import { Box, Text, RadioGroup, VStack, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { HousingType, RepairFormData } from '../../../types/formData';

interface Step1Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
}

// Варіанти типу житла
const houseTypeItems = [
  { value: 'new', label: 'Nowe' },
  { value: 'secondary', label: 'Wtórne' },
  { value: 'cottage', label: 'Domek' },
];

export const Step1_5Mobile = ({ formData, setFormData }: Step1Props) => {
  return (
    <Box>
      {/* Заголовок блоку */}
      <Text
        textStyle="blockTitle"
        mb={4}
        textAlign="center"
      >
        Wskaż typ mieszkania
      </Text>

      <VStack
        textStyle="text"
        bg="blocks.secondary"
        px="30px"
        py="15px"
        borderRadius="10px"
        align="start"
        height="100%"
      >
        {/* Підпис до радіо-групи */}
        <Text mb={2} alignSelf="flex-start">
          Typ mieszkania:
        </Text>

        <RadioGroup.Root
          value={formData.housingType || ''}
          onValueChange={(housing) =>
            setFormData((prev) => ({
              ...prev,
              housingType: housing.value as HousingType,
            }))
          }
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {houseTypeItems.map((item) => {
              const isActive = formData.housingType === item.value;

              return (
                <RadioGroup.Item key={item.value} value={item.value}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator
                    boxSize="30px"
                    boxSizing="border-box"
                    border="7px solid"
                    borderColor={isActive ? 'accent.main' : 'layout.dark'}
                    bg="white"
                    cursor="pointer"
                  />
                  <RadioGroup.ItemText textStyle="text">
                    {item.label}
                  </RadioGroup.ItemText>
                </RadioGroup.Item>
              );
            })}
          </SimpleGrid>
        </RadioGroup.Root>
      </VStack>
    </Box>
  );
};
