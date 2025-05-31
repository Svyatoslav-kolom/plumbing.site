import { Box, HStack, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";
import defaultImage from "../../assets/images/CompletedRepairs/Default.png";
import zlotyIcon from "../../assets/icons/zloty.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import squareIcon from "../../assets/icons/square.svg";

interface Props {
  image: string;
  duration: string;
  price: number;
  square: number;
  showDetails?: boolean; // новий пропс, за замовчуванням true
}

// Конфіг для інформаційних блоків: іконка і форматований текст
const infoItems = [
  {
    icon: zlotyIcon,
    getText: (price: number) => `${price} ZŁ`, // польська валюта — złoty
    key: "price" as const,
  },
  {
    icon: calendarIcon,
    getText: (duration: string) => duration, // тривалість лишаємо як є, припускаємо польський формат
    key: "duration" as const,
  },
  {
    icon: squareIcon,
    getText: (square: number) => `${square} m²`, // метр квадратний польською (m²)
    key: "square" as const,
  },
];

export const DoneRepairItem: FC<Props> = ({
  image,
  duration,
  price,
  square,
  showDetails = true,
}) => {
  // Фолбек, якщо зображення не завантажилось
  const fallbackImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  return (
    <Box
      bg="blocks.main"
      borderRadius="20px"
      overflow="hidden"
      w={"98%"}
      maxW="620px"
    >
      {/* Зображення ремонту */}
      <Image
        src={image}
        alt="remont"
        objectFit="cover"
        w={"100%"}
        maxH={"400px"}
        onError={fallbackImage}
        borderTopRadius="20px"
      />

      {/* Показуємо деталі, якщо showDetails=true */}
      {showDetails && (
        <HStack
          gap={"10px"}
          px={"20px"}
          py={"40px"}
          justifyContent="space-between"
          alignItems="stretch"
        >
          {infoItems.map((item) => {
            let content: string = "";

            switch (item.key) {
              case "price":
                content = item.getText(price);
                break;
              case "duration":
                content = item.getText(duration);
                break;
              case "square":
                content = item.getText(square);
                break;
            }

            return (
              <HStack
                key={item.key}
                bg="blocks.secondary"
                p={3}
                borderRadius="md"
                gap={2}
              >
                <Image src={item.icon} alt="" />
                <Text textStyle="text">{content}</Text>
              </HStack>
            );
          })}
        </HStack>
      )}
    </Box>
  );
};
