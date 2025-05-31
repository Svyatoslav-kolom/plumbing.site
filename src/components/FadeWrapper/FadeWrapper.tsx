import { Box } from "@chakra-ui/react";
import type { FC, ReactNode, MouseEvent } from "react";

interface Props {
  children?: ReactNode;
  onClose?: () => void; // додаємо можливість закривати
}

export const FadeWrapper: FC<Props> = ({ children, onClose }) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // Якщо натиснуто саме на фон, а не на дочірній елемент
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(255, 255, 255, 0.4)"
      backdropFilter="blur(8px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleClick} // додаємо обробник кліку
    >
      {children}
    </Box>
  );
};
