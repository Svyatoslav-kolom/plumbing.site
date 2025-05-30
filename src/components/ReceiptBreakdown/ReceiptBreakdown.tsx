import { Box, HStack, Text } from '@chakra-ui/react';

interface BreakdownItem {
  label: string;
  value: string | number;
  priceImpact: number;
}

interface ReceiptBreakdownProps {
  breakdown: BreakdownItem[];
  total: number;
}

export function ReceiptBreakdown({ breakdown, total }: ReceiptBreakdownProps) {
  return (
    <Box
      p={5}
      boxShadow="lg"
      borderBottomRadius="20px"
      zIndex={10}
      animation="slideUp 0.3s ease-out"
      textStyle="text"
      bgImage={`url(../../assets/images/check.svg)`}
      bgSize="cover"
      bgRepeat="no-repeat"
      position="center"
      bgColor="white"         // якщо фон зображення прозорий, і потрібен контраст
    >
      {breakdown.map((item, i) => (
        <HStack key={i} justifyContent="space-between" py={1}>
          <Text>{item.label}</Text>
          <Text>{item.priceImpact} грн</Text>
        </HStack>
      ))}

      <HStack
        justifyContent="space-between"
        mt={3}
        pt={2}
        borderTop="1px solid"
      >
        <Text fontWeight="bold">ІТОГО</Text>
        <Text fontWeight="bold">{total} грн</Text>
      </HStack>
    </Box>
  );
}
