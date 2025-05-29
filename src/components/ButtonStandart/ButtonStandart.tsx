import type { FC } from "react";
import { Button } from '@chakra-ui/react';

interface Props {
  text: string; // Текст кнопки
  onClick?: () => void; // Функція, яку виконуватиме кнопка
  isLargeText?: boolean; // Логічний пропс для визначення, чи великий текст
}

export const ButtonStandart: FC<Props> = ({ text, onClick, isLargeText = false }) => (
  <Button
    borderRadius="full"
    boxSizing={'border-box'}
    px={{ base: "31px", md: "28px" }}
    py={{ base: "5px", md: "20px" }}
    onClick={onClick}
    color="text.white"
    bg="accent.main"
    textStyle={isLargeText ? 'buttonLg' : 'button'}
    w={"100%"}
    height={"100%"}
    textWrap={"wrap"}
  >
    {text}
  </Button>
);
