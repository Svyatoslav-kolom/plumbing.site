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
      px={{ base: "20px", md: "40px" }}
      py="30px"
      bg="blocks.main"
      position="relative"
      overflow="visible"
      zIndex={1}
      w="100%"
    >
      {/* Заголовок секції */}
      <Text textStyle="blockTitle">Obliczenie kosztów</Text>

      <VStack gap="10px" w="100%">
        <HStack w="100%">
          <Box
            textAlign="center"
            px="22px"
            py="12px"
            bg="blocks.secondary"
            borderRadius="10px"
            w="100%"
          >
            <Text textStyle="text" color="text.grayDark">
              Cena pracy
            </Text>
            <Text>{prices.workPrice} PLN</Text>
          </Box>

          <Box
            textAlign="center"
            px="20px"
            py="12px"
            bg="blocks.secondary"
            borderRadius="10px"
            w="100%"
          >
            {/* Запобігаємо переносу тексту */}
            <Text textStyle="text" color="text.grayDark" whiteSpace="nowrap">
              Cena materiałów
            </Text>
            <Text>{prices.materialPrice} PLN</Text>
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
          <Text textStyle="text" color="text.grayDark" whiteSpace="nowrap">
            Suma
          </Text>
          <Text>{prices.total} PLN</Text>
        </Box>

        <Box height="70px" width="90%" mt="5px">
          <ButtonStandart
            text="Oblicz"
            isLargeText
            onClick={onToggleReceipt}
          />
        </Box>
      </VStack>
    </VStack>
  );
}
