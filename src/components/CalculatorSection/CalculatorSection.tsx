import { Box, Heading, HStack } from '@chakra-ui/react';
import Calculator from '../Calculator/Calculator';
import { useState } from 'react';
import SummaryWrapper from '../SummaryWrapper/SummaryWrapper';

export default function CalculatorSection() {
  const [prices, setPrices] = useState({ workPrice: 0, materialPrice: 0, total: 0 });

  return (
    <Box>
      <Heading
        textStyle={"pageTitle"}
        mb={6}
        maxW={"800px"}
      >
        Виды ремонта, которые мы выполняем
      </Heading>

      <HStack justifyContent={"space-between"}>
        <Box>
          <Calculator setPrices={setPrices} />
        </Box>
        <Box>
          <SummaryWrapper prices={prices} />
        </Box>
      </HStack>
    </Box>
  );
}