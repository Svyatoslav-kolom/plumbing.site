import { Box, Text, RadioGroup, VStack, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { HousingType, RepairFormData, RepairType } from '../../../types/formData';

interface Step1Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
}

const repairTypeItems = [
  { value: 'cosmetic', label: 'Косметический' },
  { value: 'capital', label: 'Капитальный' },
  { value: 'black', label: 'Черновой' },
  { value: 'designer', label: 'Дизайнерский' },
];

const houseTypeItems = [
  { value: 'new', label: 'Новостройка' },
  { value: 'secondary', label: 'Вторичное жилье' },
  { value: 'cottage', label: 'Коттедж или таунхаус' },
];

export const Step1 = ({ formData, setFormData }: Step1Props) => {
  return (
    <Box>
      <Text
        textStyle="blockTitle"
        mb={4}
        textAlign="center"
      >
        Укажите вид ремонта
      </Text>

      <VStack
        textStyle="text"
        bg="blocks.secondary"
        px="30px"
        py="15px"
        borderRadius="10px"
        mb="10px"
        align="start"
      >
        <Text mb={2} alignSelf="flex-start">
          Вид ремонта:
        </Text>

        <RadioGroup.Root
          onValueChange={(details) =>
            setFormData((prev) => ({
              ...prev,
              repairType: details.value as RepairType,
            }))
          }
          value={formData.repairType || ''}
        >
          <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
            {repairTypeItems.map((item) => {
              const isActive = formData.repairType === item.value;

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
                  <RadioGroup.ItemText textStyle="text">{item.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              );
            })}
          </SimpleGrid>
        </RadioGroup.Root>
      </VStack>

      {/* Секція типу житла — видима тільки на md і більше */}
      <VStack
        display={{ base: 'none', md: 'flex' }}
        textStyle="text"
        bg="blocks.secondary"
        px="30px"
        py="15px"
        borderRadius="10px"
      >
        <Text mb={2} alignSelf="flex-start">
          Тип жилья:
        </Text>

        <RadioGroup.Root
          onValueChange={(housing) =>
            setFormData((prev) => ({
              ...prev,
              housingType: housing.value as HousingType,
            }))
          }
          value={formData.housingType || ''}
        >
          <SimpleGrid columns={2} gap={4}>
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
                  <RadioGroup.ItemText textStyle="text">{item.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              );
            })}
          </SimpleGrid>
        </RadioGroup.Root>
      </VStack>
    </Box>
  );
};
