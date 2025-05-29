import { Box } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  title: string;
}

export const PriceBlock: FC<Props> = ({ title }) => (
  <Box
    textAlign="center"
    p={3}
    borderRadius="md"
    fontSize="xl"
    fontWeight="bold"
    color="text.black"
    bg="blocks.secondary"
    textStyle="blockTitle"
    w={"100%"}
  >
    {title}
  </Box>
);
