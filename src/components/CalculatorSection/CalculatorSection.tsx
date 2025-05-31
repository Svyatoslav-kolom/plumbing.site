import { Box, Heading, Stack } from '@chakra-ui/react';
import Calculator from '../Calculator/Calculator';
import { useState } from 'react';
import SummaryWrapper from '../SummaryWrapper/SummaryWrapper';
import { useMode } from '../../utils/urlMode';

export default function CalculatorSection() {
  // Стан для зберігання вартості роботи, матеріалів та загальної суми
  const [prices, setPrices] = useState({ workPrice: 0, materialPrice: 0, total: 0 });

  // Отримання режиму з URL (наприклад, "repair" або "design")
  const [mode] = useMode();

  return (
    <Box>
      {/* Заголовок секції */}
      <Heading
        textStyle="pageTitle"
        mb={6}
        maxW="800px"
        px={{ base: '30px', md: 0 }}
      >
        Kalkulator ceny
      </Heading>

      {/* Головний контейнер з калькулятором і підсумком */}
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        justifyContent="space-between"
      >
        {/* Калькулятор — ліва частина */}
        <Box
          maxW={{ base: '100%', xl: '550px' }}
          px={{ base: '30px', md: 0 }}
        >
          <Calculator setPrices={setPrices} mode={mode} />
        </Box>

        {/* Підсумкова інформація — права частина */}
        <Box
          px={{ base: '10px', md: 0 }}
          w={{ base: '100%', md: '90%', xl: '40%' }}
          alignSelf="center"
        >
          <SummaryWrapper prices={prices} />
        </Box>
      </Stack>
    </Box>
  );
}
