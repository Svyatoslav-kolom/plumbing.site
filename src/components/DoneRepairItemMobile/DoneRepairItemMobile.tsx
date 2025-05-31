import { Box, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { FC } from "react";
import defaultImage from "../../assets/images/CompletedRepairs/Default.png";
import zlotyIcon from "../../assets/icons/zloty.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import squareIcon from "../../assets/icons/square.svg";
import { ButtonStandart } from "../ButtonStandart";
import type { RepairDetails } from "../../types/repairsTypes";

interface Props {
  title: string;
  image: string;
  description: string;
  repairFeatures: string[];
  repairDetails: RepairDetails;
}

export const DoneRepairItemMobile: FC<Props> = ({
  title,
  image,
  description,
  repairDetails,
  repairFeatures
}) => {
  // Обробник помилки завантаження зображення — показує дефолтне зображення
  const fallbackImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  // Масив з інформаційними елементами для відображення ціни, тривалості, площі
  const infoItems = [
    {
      icon: zlotyIcon,
      getText: (price: number) => `${price} ZŁ`,
      key: "price" as const,
    },
    {
      icon: calendarIcon,
      getText: (duration: string) => duration,
      key: "duration" as const,
    },
    {
      icon: squareIcon,
      getText: (square: number) => `${square} m²`,
      key: "square" as const,
    },
  ];

  return (
    <Box
      bg={"blocks.main"}
      px={"30px"}
      py="20px"
      borderRadius={"20px"}
    >
      <Heading
        textStyle="blockTitle"
        fontWeight={400}
        mb={"10px"}
      >
        {title}
      </Heading>

      <Image
        src={image}
        alt="naprawa" // alt польською — "ремонт"
        objectFit="cover"
        w="100%"
        onError={fallbackImage}
        borderTopRadius="20px"
      />

      <Stack
        gap={"10px"}
        alignItems="start"
        justifyContent={"center"}
        mt={"10px"}
        flexDirection={{ base: "column", md: "row" }}
      >
        {infoItems.map((item) => {
          let content: string = "";
          if (item.key === "price") {
            content = item.getText(repairDetails.price);
          } else if (item.key === "duration") {
            content = item.getText(repairDetails.duration);
          } else if (item.key === "square") {
            content = item.getText(repairDetails.square);
          }

          return (
            <HStack
              key={item.key}
              bg="blocks.secondary"
              px={"10px"}
              py={"5px"}
              borderRadius="md"
              gap={2}
            >
              <Image src={item.icon} alt="" w={"30px"} />
              <Text textStyle="text">{content}</Text>
            </HStack>
          );
        })}
      </Stack>

      <Text textStyle="text" mt={"20px"}>
        {description}
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        w="100%"
        bg="blocks.secondary"
        borderRadius="15px"
        p="10px"
        mt="20px"
      >
        {repairFeatures.map((feature, index) => (
          <HStack key={`feature-${index}`} align="start" gap="8px">
            <Box
              boxSize="10px"
              bg="accent.main"
              borderRadius="full"
              mt="6px"
              minW="10px"
            />
            <Text textStyle="text" color="text.black">
              {feature}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>

      <Box w={"100%"} height={"64px"} mt={"20px"}>
        <ButtonStandart text={"Oblicz koszt podobnego projektu"} />
      </Box>
    </Box>
  );
};
