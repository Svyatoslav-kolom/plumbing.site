import {
  Flex,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { FC } from "react";
import type { AdditionalInformation } from "../../types/RepairItem";
import { PriceBlock } from "../PriceBlock";

interface RepairCardProps {
  title: string;
  description: string;
  price: number | string;
  repairTime: number | string;
  additionalInformation: AdditionalInformation;
}

export const RepairCard: FC<RepairCardProps> = ({
  price,
  repairTime,
  additionalInformation,
}) => {
  const sections = additionalInformation.details;

  return (
    <Flex
      direction="column"
      borderRadius="md"
      p={4}
      gap={6}
      w="100%"
    >
      <Flex flexWrap="wrap" gap={6}>
        {sections.map((section, idx) => (
          <Box
            key={idx}
            flexBasis={{ base: "100%", md: "calc(50% - 12px)" }}
            flexGrow={1}
          >
            <Text textStyle="subtitle" mb={2}>
              {section.category}
            </Text>

            <VStack align="start" gap={1}>
              {section.items.map((item, i) => (
                <Text key={i} textStyle="text">
                  <Text as="span" color="orange.500">
                    {i + 1}.
                  </Text>{" "}
                  {item}
                </Text>
              ))}
            </VStack>
          </Box>
        ))}

        <Box
          flexBasis={{ base: "100%", md: "calc(50% - 12px)" }}
          p={4}
          borderRadius="md"
        >
          <VStack align="start" gap={4} w={"100%"}>
            <Box>
              <Text textStyle="subtitle" color="text.grayDark">
                Стоимость от:
              </Text>

              <PriceBlock title={`${price} $`} />
            </Box>

            <Box>
              <Text textStyle="subtitle" color="text.grayDark">
                Сроки от:
              </Text>

              <PriceBlock title={`${repairTime} мес.`} />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};
