'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Text,
  Input,
  Stack,
  Slider,
  RadioGroup,
} from '@chakra-ui/react';
import { ButtonStandart } from '../ButtonStandart';
import { PriceBlock } from '../PriceBlock';

// Ставки на ремонт, ключі — тип ремонту, значення — ціна за м²
const repairRates: Record<string, number> = {
  'Kosmetyczny': 8600,
  'Szkieletowy': 7000,
  'Generalny': 12000,
  'Projektowy': 15000,
};

export const CalculatorHeader: React.FC = () => {
  const [area, setArea] = useState([40]);
  const [repairType, setRepairType] = useState('Kosmetyczny');

  // Обчислюємо загальну вартість ремонту
  const totalCost = useMemo(() => {
    const rate = repairRates[repairType] || 0;
    return area[0] * rate;
  }, [area, repairType]);

  return (
    <Box
      maxW="sm"
      mx="auto"
      p={5}
      borderRadius="lg"
      bg="blocks.main"
      boxShadow="md"
    >
      <Text textStyle="blockTitle" color="text.black" mb={2}>
        Uzyskaj dokładny kosztorys na Twój remont
      </Text>

      <Text textStyle="subtitle" color="text.grayDark" mb={1}>
        Powierzchnia pomieszczenia
      </Text>

      <Input
        value={`${area} m²`}
        w={"130px"}
        mb={1}
        display={"block"}
        textAlign="center"
        bg="blocks.secondary"
        borderRadius="md"
        color="text.black"
        textStyle="text"
        py={2}
        pl={2}
        pr={50}
      />

      <Slider.Root
        min={10}
        max={100}
        step={1}
        value={area}
        size="lg"
        onValueChange={(e) => setArea(e.value)}
      >
        <Slider.Control>
          <Slider.Track bg='layout.dark'>
            <Slider.Range bg="accent.main" height={"10px"} />
          </Slider.Track>

          <Slider.Thumb index={0} bg="white" borderColor="accent.main">
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>

      <Text textStyle="subtitle" color="text.grayDark" mb={1}>
        Rodzaj remontu
      </Text>

      <Box
        bg="blocks.secondary"
        px={"5px"}
        py={"10px"}
        borderRadius="md"
        mb={2}
      >
        <RadioGroup.Root
          value={repairType}
          onValueChange={(details) => {
            setRepairType(details.value as string);
          }}
        >
          <Stack
            direction="row"
            wrap="wrap"
            gap={3}
          >
            {Object.keys(repairRates).map((type) => (
              <RadioGroup.Item key={type} value={type}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  px={3}
                  py={1}
                  borderRadius="md"
                  cursor="pointer"
                  w={"150px"}
                >
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator
                    boxSize={"25px"}
                    borderRadius="full"
                    border="7px solid"
                    bg='text.white'
                    cursor={'pointer'}
                    borderColor={repairType === type ? 'accent.main' : 'layout.dark'}
                  />
                  <RadioGroup.ItemText color="text.black">{type}</RadioGroup.ItemText>
                </Box>
              </RadioGroup.Item>
            ))}
          </Stack>
        </RadioGroup.Root>
      </Box>

      <Text textStyle="subtitle" color="text.grayDark">
        Razem
      </Text>

      <Box mx={"20%"}>
        <PriceBlock title={`${totalCost.toLocaleString('pl-PL')} zł`} />
      </Box>

      <Box
        w={"100%"}
        h={{ base: "54px", md: "64px" }}
        mt={5}
      >
        <ButtonStandart text={'Zostaw zgłoszenie'} isLargeText={true} />
      </Box>
    </Box>
  );
};

export default CalculatorHeader;
