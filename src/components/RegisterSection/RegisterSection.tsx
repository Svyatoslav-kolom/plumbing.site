import { Box, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { ButtonStandart } from "../ButtonStandart";

export const RegisterSection = () => (
  <Box
    py={"70px"}
    display={"flex"}
    flexDirection={"row"}
    justifyContent={"space-between"}
  >
    <Box
      bg="blocks.main"
      pt={"50px"}
      pb={"25px"}
      px={"50px"}
      borderRadius="15px"
      w={"400px"}
    >
      <VStack gap={"30px"}>
        <Input
          placeholder="Ваше имя"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height={"60px"}
        />
        <Input
          placeholder="Номер телефона"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height={"60px"}
        />
      </VStack>

      <Box w={"272px"} height={"53px"} mt={"50px"} mx={"auto"}>
        <ButtonStandart text={"Заявка"} isLargeText={true} />
      </Box>

    </Box>

    <VStack 
      w={"600px"} 
      gap={4} 
      color={"text.white"}
      mt={"20px"}
      >
      <Heading textStyle={"pageTitle"} fontWeight={400}>
        ОСТАВТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС
      </Heading>

      <Text>
        Оставьте заявку на бесплатную консультацию, мы свяжемся с вами в течении 30 минут и отправим замерщика на дом.
      </Text>
    </VStack>
  </Box>
);
