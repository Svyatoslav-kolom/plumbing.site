import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { ButtonStandart } from '../ButtonStandart';

interface Props {
  prices: {
    workPrice: number;
    materialPrice: number;
    total: number;
  };
  onToggleReceipt: () => void;
}

export default function SummaryBox({ prices, onToggleReceipt }: Props) {
  return (
    <VStack
      borderRadius="15px"
      px="40px"
      py="30px"
      bg="blocks.main"
      position="relative"
      overflow="visible"
      zIndex={1}
    >
      <Text textStyle="blockTitle">Розрахунок вартості</Text>

      <VStack gap="10px">
        <HStack>
          <Box
            textAlign="center"
            px="22px"
            py="12px"
            bg="blocks.secondary"
            borderRadius="10px"
            w="100%"
          >
            <Text textStyle="text" color="text.grayDark">
              Ціна роботи
            </Text>
            <Text>{prices.workPrice} грн</Text>
          </Box>

          <Box
            textAlign="center"
            px="20px"
            py="12px"
            bg="blocks.secondary"
            borderRadius="10px"
            w="100%"
          >
            <Text textStyle="text" color="text.grayDark" textWrap="nowrap">
              Ціна матеріалів
            </Text>
            <Text>{prices.materialPrice} грн</Text>
          </Box>
        </HStack>

        <Box
          textAlign="center"
          px="20px"
          py="12px"
          bg="blocks.secondary"
          borderRadius="10px"
          w="90%"
        >
          <Text textStyle="text" color="text.grayDark" textWrap="nowrap">
            Сума
          </Text>
          <Text>{prices.total} грн</Text>
        </Box>

        <Box height="70px" width="90%" mt="5px">
          <ButtonStandart
            text="Розрахунок"
            isLargeText
            onClick={onToggleReceipt}
          />
        </Box>
      </VStack>
    </VStack>
  );
}
