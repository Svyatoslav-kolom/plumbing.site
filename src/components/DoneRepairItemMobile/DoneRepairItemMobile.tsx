import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import type { RepairDetails } from "../DoneRepairs/completedRepairs";
import defaultImage from "../../assets/images/CompletedRepairs/Default.png";
import zlotyIcon from "../../assets/icons/zloty.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import squareIcon from "../../assets/icons/square.svg";
import { ButtonStandart } from "../ButtonStandart";


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
  const fallbackImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

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
        alt="repair"
        objectFit="cover"
        w="100%"
        onError={fallbackImage}
        borderTopRadius="20px"
      />

      <VStack
        gap={"10px"}
        alignItems={"start"}
        mt={"10px"}
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
              <Image src={item.icon} alt="" w={"30px"}/>
              <Text textStyle="text">{content}</Text>
            </HStack>
          );
        })}
      </VStack>

      <Text textStyle="text" mt={"20px"}>{description}</Text>

      <VStack
        bg="blocks.secondary"
        borderRadius="15px"
        w="100%"
        align="start"
        p="10px"
        mt={"20px"}

      >
        {repairFeatures.map((feature, index) => (
          <HStack key={`$-feature-${index}`} align="start" gap="8px">
            <Box
              boxSize="10px"
              bg="accent.main"
              borderRadius="full"
              mt="6px"
            />
            <Text textStyle="text" color="text.black">
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Box w={"100%"} height={"64px"} mt={"20px"}>
        <ButtonStandart text={"Рассчитать стоимость похожего проекта"} />
      </Box>
    </Box>
  );
}
