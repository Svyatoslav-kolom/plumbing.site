import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export const StagesItem: FC<Props> = ({
  title,
  description,
  icon,
}) => (
  <Box
    p={"30px"}
    bg="blocks.main"
    borderRadius="15px"
    w="100%"
  >
    <HStack
      justifyContent={"space-between"}
      alignItems="start"
      mb={"20px"}
    >
      <Heading textStyle={"blockTitle"} color={"accent.main"} fontWeight={"bold"}>
        {title}
      </Heading>

      <Image src={icon} />
    </HStack>

    <Text textStyle={"text"}>
      {description}
    </Text>
  </Box>
);
