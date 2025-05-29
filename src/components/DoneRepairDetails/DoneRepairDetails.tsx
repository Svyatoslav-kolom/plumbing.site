import { Heading, VStack, Text, Box, HStack } from "@chakra-ui/react";
import type { FC } from "react";
import { ButtonStandart } from "../ButtonStandart";

interface Props {
  id: number;
  title: string;
  description: string;
  repairFeatures: string[];
}

export const DoneRepairDetails: FC<Props> = ({
  id,
  title,
  description,
  repairFeatures,
}) => (
  <VStack
    bg={"blocks.main"}
    borderRadius="15px"
    px={"45px"}
    py={"35px"}
    maxH={"480px"}
  >
    <Heading
      textStyle="blockTitle"
      fontWeight={400}
      mb={"10px"}
    >
      {title}
    </Heading>

    <Text textStyle="text" mb={"10px"}>
      {description}
    </Text>

    <VStack
      bg="blocks.secondary"
      borderRadius="15px"
      w="100%"
      align="start"
      p="10px"
      mb={"20px"}
    >
      {repairFeatures.map((feature, index) => (
        <HStack key={`${id}-feature-${index}`} align="start" gap="8px">
          <Box
            boxSize="10px"
            bg="accent.main"
            borderRadius="full"
            mt="6px"
          />
          <Text textStyle="text" color="text.black">
            {feature}
          </Text>
        </HStack>
      ))}
    </VStack>

    <Box w={"100%"} height={"64px"}>
      <ButtonStandart text={"Рассчитать стоимость похожего проекта"} />
    </Box>

  </VStack>
);
