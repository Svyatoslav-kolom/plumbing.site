// ReceiptBreakdown.tsx
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
      bg="white"
      boxShadow="lg"
      borderBottomRadius="20px"
      zIndex={10}
      animation="slideUp 0.3s ease-out"
      textStyle={"text"}
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
        <Text>ІТОГО</Text>
        <Text>{total} грн</Text>
      </HStack>
    </Box>
  );
}
