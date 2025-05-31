import { Box, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { ButtonStandart } from "../ButtonStandart";

interface Props {
  onOpenRegister: (value: boolean) => void;
}

export const RegisterSection: React.FC<Props> = ({ onOpenRegister }) => (
  <Box
    py={{ base: "30px", md: "70px" }}
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
  >
    {/* Бічна форма для десктопу */}
    <Box
      bg="blocks.main"
      pt="50px"
      pb="25px"
      px="50px"
      borderRadius="15px"
      w="400px"
      display={{ base: "none", md: "block" }}
    >
      <VStack gap="30px">
        <Input
          placeholder="Twoje imię"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height="60px"
        />

        <Input
          placeholder="Numer telefonu"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height="60px"
        />
      </VStack>

      <Box w="272px" height="53px" mt="50px" mx="auto">
        <ButtonStandart text="Zgłoszenie" isLargeText={true} />
      </Box>
    </Box>

    {/* Основний текст та кнопка для мобільних */}
    <VStack
      w="600px"
      gap={4}
      color="text.white"
      mt="20px"
      maxW={{ base: "100%", md: "530px", xl: "100%" }}
    >
      <Heading textStyle="pageTitle" fontWeight={400}>
        ZŁÓŻ ZGŁOSZENIE JUŻ TERAZ
      </Heading>

      <Text>
        Zostaw zgłoszenie na bezpłatną konsultację, skontaktujemy się z Tobą w ciągu 30 minut i wyślemy fachowca do domu.
      </Text>

      <Box
        w="272px"
        height="53px"
        mt={{ base: "40px", md: "50px" }}
        mx="auto"
        display={{ base: "block", md: "none" }}
      >
        <ButtonStandart
          text="Zgłoszenie"
          isLargeText={true}
          onClick={() => onOpenRegister(true)}
        />
      </Box>
    </VStack>
  </Box>
);
