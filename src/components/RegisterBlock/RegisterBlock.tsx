// RegisterBlock.tsx
import { Box, Input, VStack, CloseButton, HStack, Heading } from "@chakra-ui/react";
import { ButtonStandart } from "../ButtonStandart";

interface RegisterBlockProps {
  onClose: () => void;
}

export const RegisterBlock: React.FC<RegisterBlockProps> = ({ onClose }) => (
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
    <HStack justifyContent={"space-between"}>
      <Heading textStyle={"blockTitle"} fontWeight={400}>
        Оставте заявку
      </Heading>

      <CloseButton onClick={onClose} />
    </HStack>

    <VStack gap="30px" mt="20px">
      <Input
        placeholder="Ваше имя"
        bg="blocks.secondary"
        borderRadius="md"
        _placeholder={{ color: "text.grayDark" }}
        height="60px"
      />
      <Input
        placeholder="Номер телефона"
        bg="blocks.secondary"
        borderRadius="md"
        _placeholder={{ color: "text.grayDark" }}
        height="60px"
      />
    </VStack>

    <Box w="272px" height="53px" mt="50px" mx="auto">
      <ButtonStandart text="Заявка" isLargeText={true} />
    </Box>
  </Box>
);
