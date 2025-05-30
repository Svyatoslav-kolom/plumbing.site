import { Box, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { ButtonStandart } from "../ButtonStandart";

interface Props {
  onOpenRegister: (value: boolean) => void;
}

export const RegisterSection: React.FC<Props> = ({ onOpenRegister }) => (
  <Box
    py={{ base: "30px", md: "70px" }}
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

      display={{ base: "none", md: "block" }}
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

      <Box
        w={"272px"}
        height={"53px"}
        mt={"50px"}
        mx={"auto"}
      >
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

      <Box
        w={"272px"}
        height={"53px"}
        mt={{ base: "40px", md: "50px" }}
        mx={"auto"}
        display={{ base: "block", md: "none" }}
        
      >
        <ButtonStandart text={"Заявка"} isLargeText={true} onClick={() => onOpenRegister(true)} />
      </Box>
    </VStack>
  </Box>
);
