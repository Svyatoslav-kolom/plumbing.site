import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
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
    p={{ base: 0, md: "30px" }}
    bg={{ base: "transparent", md: "blocks.main" }}
    borderRadius="15px"
    w="100%"
  >
    <Stack
      justifyContent={"space-between"}
      alignItems="start"
      mb={{ base: "5px", md: "20px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Image
        src={icon}
        order={{ base: -1, md: 1 }} // моб: перша, десктоп: остання
      />

      <Heading
        textStyle={"blockTitle"}
        color={"accent.main"}
        fontWeight={"bold"}
      >
        {title}
      </Heading>
    </Stack>

    <Text textStyle={"text"}>
      {description}
    </Text>
  </Box>
);
