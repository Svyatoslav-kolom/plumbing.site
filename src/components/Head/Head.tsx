import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import { CustomSwitch } from "../CustomSwitch";
import SwitchOnIcon from '../../assets/icons/RepairDesignIcons/renovation.svg?react';
import SwitchOffIcon from '../../assets/icons/RepairDesignIcons/designIcon.svg?react';
import { CalculatorHeader } from "../CalculatorHeader";
import { useMode } from "../../utils/urlMode";

export const Head = () => {
  const customSwitchSize = useBreakpointValue({ base: 50, md: 73 });

  const [mode, setMode] = useMode();
  const isDesign = mode === "design";
  const handleSwitchChange = (val: boolean) => {
    setMode(val ? "design" : "renovation");
  };

  return (
    <Stack
      px={{ base: "30px", md: "100px" }}
      pb={{ base: "30px", md: "0px" }}
      gap={{ base: "30px", md: "100px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <VStack w={{ base: "100%", md: "50%" }} gap={4}>
        <Heading textStyle={"pageTitle"} fontWeight={500}>
          Лучший ремонт в Кракове
        </Heading>

        <Text textStyle={"text"}>
          Занимаемся как ремонтом так и дизайном. Оставьте заявку на бесплатную
          консультацию, мы свяжемся с вами в течении 30 минут и отправим замерщика на дом.
        </Text>

        <Flex
          align="center"
          mt={{ base: "30px", md: "50px" }}
          justifyContent={{ base: "space-between", md: "flex-start" }}
          gap={{ base: 0, md: 4 }}
          w={"100%"}
        >
          <Text textStyle="blockTitle" color={isDesign ? "text.grayDark" : "text.black"}>
            Ремонт
          </Text>

          <Box>
            <CustomSwitch
              size={customSwitchSize}
              checked={isDesign}
              onChange={handleSwitchChange}
              iconOff={<SwitchOnIcon />}
              iconOn={<SwitchOffIcon />}
            />
          </Box>

          <Text textStyle="blockTitle" color={isDesign ? "text.black" : "text.grayDark"}>
            Дизайн
          </Text>
        </Flex>
      </VStack>

      <CalculatorHeader />
    </Stack>
  );
};
