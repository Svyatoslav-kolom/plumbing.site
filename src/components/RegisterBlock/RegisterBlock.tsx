import React, { useState } from "react";
import {
  Box,
  Input,
  VStack,
  CloseButton,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { ButtonStandart } from "../ButtonStandart";
import { submitRegisterForm } from "../../utils/formSubmit";

interface RegisterBlockProps {
  onClose: () => void;
}

export const RegisterBlock: React.FC<RegisterBlockProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    submitRegisterForm({
      name,
      phone,
      setName,
      setPhone,
      setLoading,
    });
  };

  return (
    <Box
      bg="blocks.main"
      pt="20px"
      pb="25px"
      px="50px"
      borderRadius="15px"
      w="400px"
      position="relative"
      boxShadow="lg"
      mx="auto"
      mt={10}
    >
      {/* Заголовок і кнопка закриття */}
      <HStack justifyContent={"space-between"}>
        <Heading textStyle={"blockTitle"} fontWeight={400}>
          Zostaw zgłoszenie
        </Heading>

        <CloseButton onClick={onClose} />
      </HStack>

      {/* Поля форми */}
      <VStack gap="30px" mt="20px">
        <Input
          placeholder="Twoje imię"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height="60px"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Numer telefonu"
          bg="blocks.secondary"
          borderRadius="md"
          _placeholder={{ color: "text.grayDark" }}
          height="60px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </VStack>

      {/* Кнопка відправки */}
      <Box w="272px" height="53px" mt="50px" mx="auto">
        <ButtonStandart
          text={loading ? "Wysyłanie..." : "Wyślij"}
          isLargeText={true}
          onClick={handleSubmit}
        />
      </Box>
    </Box>
  );
};
