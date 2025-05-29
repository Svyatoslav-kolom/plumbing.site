import { Box } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;  // приймаємо дочірні елементи
}

export const FadeWrapper: FC<Props> = ({ children }) => (
  <Box
    position="fixed"
    top={0}
    bottom={0}
    left={0}
    right={0}
    zIndex={1000}
    bg="rgba(255, 255, 255, 0.4)" // напівпрозорий білий фон
    backdropFilter="blur(8px)"    // блюр
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);
