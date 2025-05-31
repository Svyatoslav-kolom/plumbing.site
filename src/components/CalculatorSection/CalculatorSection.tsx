import { Box, Heading, Stack } from '@chakra-ui/react';
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
        px={{ base: "30px", md: 0 }}
      >
        Калькулятор цены
      </Heading>

      <Stack
        justifyContent={"space-between"}
        direction={{ base: "column", xl: "row" }}
      >
        <Box
          maxW={{ base: "100%", xl: "550px" }}
          px={{ base: "30px", md: 0 }}
        >
          <Calculator setPrices={setPrices} />
        </Box>
        <Box
          px={{ base: "10px", md: 0 }}
          w={{ base: "100%", md: "90%", xl: "40%" }}
          alignSelf={"center"}
        >
          <SummaryWrapper prices={prices} />
        </Box>
      </Stack>
    </Box>
  );
}