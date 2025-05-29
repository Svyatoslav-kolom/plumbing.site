"use client";

import {
  createSystem,
  defaultConfig,
  defineTextStyles,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Анімація для плавного з’явлення чеку
export const slideDown = keyframes`
  from {
    transform: translateY(-300px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-300px);
    opacity: 0;
  }
`;

const textStyles = defineTextStyles({
  pageTitle: {
    description: "Заголовки страниц (адаптивные)",
    value: {
      fontSize: { base: "32px", md: "48px", lg: "64px" },
      fontWeight: "500",
      lineHeight: "120%",
    },
  },
  blockTitle: {
    description: "Заголовки блоков (адаптивные)",
    value: {
      fontSize: { base: "20px", md: "24px", lg: "30px" },
      fontWeight: "500",
      lineHeight: "130%",
    },
  },
  subtitle: {
    description: "Подзаголовки (адаптивные)",
    value: {
      fontSize: { base: "16px", md: "18px", lg: "20px" },
      fontWeight: "500",
      lineHeight: "130%",
    },
  },
  text: {
    description: "Обычный текст (адаптивный)",
    value: {
      fontSize: { base: "14px", md: "16px", lg: "18px" },
      fontWeight: "500",
      lineHeight: "140%",
    },
  },
  button: {
    description: "Кнопки — средний размер",
    value: {
      fontSize: { base: "18px", md: "18px", lg: "20px" },
      fontWeight: "500",
    },
  },
  buttonLg: {
    description: "Кнопки — большой размер",
    value: {
      fontSize: { base: "20px", md: "24px", lg: "30px" },
      fontWeight: "500",
    },
  },
});

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Gilroy', sans-serif" },
      },
      colors: {
        // Текстовые цвета
        text: {
          black: { value: "#000000" },
          white: { value: "#FFFFFF" },
          grayDark: { value: "#3B3B3B" },
        },
        // Цвета блоков
        blocks: {
          main: { value: "#D9D9D9" },
          secondary: { value: "#BDBDBD" },
        },
        // Прочее оформление
        layout: {
          header: { value: "#D3E2E4" },
          background: { value: "#6AB4E5" },
          dark: { value: "#677B87" },
        },
        // Акцент
        accent: {
          main: { value: "#F0902A" },
        },
      },
    },
    textStyles,
  },
});
