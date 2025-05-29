// DoneRepairItem.tsx

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

const infoItems = [
  {
    icon: zlotyIcon,
    getText: (price: number) => `${price} ZL`,
    key: "price" as const,
  },
  {
    icon: calendarIcon,
    getText: (duration: string) => duration,
    key: "duration" as const,
  },
  {
    icon: squareIcon,
    getText: (square: number) => `${square} м²`,
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
  const fallbackImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  return (
    <Box
      bg="blocks.main"
      borderRadius="20px"
      overflow="hidden"
      w={"98%"}
    >
      <Image
        src={image}
        alt="repair"
        objectFit="cover"
        w="100%"
        onError={fallbackImage}
        borderTopRadius="20px"
      />

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
            if (item.key === "price") {
              content = item.getText(price);
            } else if (item.key === "duration") {
              content = item.getText(duration);
            } else if (item.key === "square") {
              content = item.getText(square);
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
