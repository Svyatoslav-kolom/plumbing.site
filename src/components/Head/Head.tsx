import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { CustomSwitch } from "../CustomSwitch";
import SwitchIcon from '../../assets/icons/renovation.svg?react'
import { CalculatorHeader } from "../CalculatorHeader";

export const Head = () => (
  <Stack
    px="100px"
    gap="100px"
    flexDirection="row"

  >
    <VStack w={"50%"} gap={4}>
      <Heading textStyle={"pageTitle"} fontWeight={500}>
        Лучший ремонт в Кракове
      </Heading>

      <Text textStyle={"text"}>
        Занимаемся как ремонтом так и дизайном. Оставьте заявку на
        бесплатную консультацию, мы свяжемся с вами в течении 30 минут и отправим замерщика на дом.
      </Text>

      <Flex align="center" gap={4} mt={"50px"}>
        <Text textStyle="blockTitle" color="text.grayDark" mr={2}>Ремонт</Text>

        <Box >
          <CustomSwitch
            size={73}
            // checked={isEnabled}
            // onChange={(val) => setIsEnabled(val)}
            iconOff={<SwitchIcon />}
            iconOn={<SwitchIcon />}
          />
        </Box>


        <Text textStyle="blockTitle" color="text.grayDark">Дизайн</Text>
      </Flex>
    </VStack>

    <CalculatorHeader />
  </Stack>
);
