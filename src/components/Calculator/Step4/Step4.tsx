import {
  Box,
  Text,
  RadioGroup,
  HStack,
  VStack,
} from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { RepairFormData } from '../../../types/formData';

interface Step4Props {
  formData: RepairFormData;
  setFormData: Dispatch<SetStateAction<RepairFormData>>;
}

export default function Step4({ formData, setFormData }: Step4Props) {
  return (
    <Box>
      <Text
        textStyle={"blockTitle"}
        mb={4}
        textAlign={"center"}
      >
        Укажите детали ремонта
      </Text>

      <VStack
        w={"100%"}
        justifyContent={"space-around"}
        height={"100%"}
      >
        <VStack
          textStyle="text"
          bg={"blocks.secondary"}
          px={"30px"}
          py={"15px"}
          borderRadius={"10px"}
          mb={"10px"}
          w={"100%"}
          alignItems={"start"}
        >

          <Text mb={2} alignSelf="flex-start">
            Нужен ли демонтаж?
          </Text>

          <RadioGroup.Root
            value={formData.demolition ? 'yes' : 'no'}
            onValueChange={(details) =>
              setFormData((prev) => ({ ...prev, demolition: details.value === 'yes' }))
            }
          >
            <HStack gap="6">
              {['yes', 'no'].map((val) => {
                const isActive = (formData.demolition && val === 'yes') || (!formData.demolition && val === 'no');

                return (
                  <RadioGroup.Item key={val} value={val}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator
                      boxSize={"30px"}
                      boxSizing={"border-box"}
                      border={"7px solid"}
                      borderColor={isActive ? 'accent.main' : 'layout.dark'}
                      bg={"white"}
                      cursor={"pointer"}
                    />
                    <RadioGroup.ItemText textStyle="text">
                      {val === 'yes' ? 'да' : 'нет'}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                );
              })}
            </HStack>
          </RadioGroup.Root>

        </VStack>


        <VStack
          textStyle="text"
          bg={"blocks.secondary"}
          px={"30px"}
          py={"15px"}
          borderRadius={"10px"}
          mb={"10px"}
          w={"100%"}
          alignItems={"start"}
        >

          <Text mb={2} alignSelf="flex-start">
            Нужно ли выравнивать стены?
          </Text>

          <RadioGroup.Root
            value={formData.wallAlignment ? 'yes' : 'no'}
            onValueChange={(details) =>
              setFormData((prev) => ({ ...prev, wallAlignment: details.value === 'yes' }))
            }
          >
            <HStack gap="6">
              {['yes', 'no'].map((val) => {
                const isActive = (formData.wallAlignment && val === 'yes') || (!formData.wallAlignment && val === 'no');

                return (
                  <RadioGroup.Item key={val} value={val}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator
                      boxSize={"30px"}
                      boxSizing={"border-box"}
                      border={"7px solid"}
                      borderColor={isActive ? 'accent.main' : 'layout.dark'}
                      bg={"white"}
                      cursor={"pointer"}
                    />
                    <RadioGroup.ItemText textStyle="text">
                      {val === 'yes' ? 'да' : 'нет'}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                );
              })}
            </HStack>
          </RadioGroup.Root>
        </VStack>
      </VStack>
    </Box >
  );
}
