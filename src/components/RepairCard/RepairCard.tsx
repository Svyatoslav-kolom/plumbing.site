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
      p={{ base: "0", md: 4 }}
      w="100%"
    >
      <Flex
        flexWrap="wrap"
        gap={{ base: "10px", md: 6 }}
      >
        {sections.map((section, idx) => (
          <Box
            key={idx}
            flexBasis={{ base: "100%", md: "calc(50% - 12px)" }}
            flexGrow={1}
            textStyle="text"
            bg={{ base: "blocks.secondary", md: "transparent" }}
            px={{ base: "15px", md: "0" }}
            py={{ base: "15px", md: "0" }}
            borderRadius={{ base: "10px", md: "0" }}
            mb={{ base: "10px", md: "0" }}
          >
            {/* Категорія розділу */}
            <Text textStyle="subtitle" mb={2}>
              {section.category}
            </Text>

            {/* Перелік пунктів у категорії */}
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

        {/* Блок з ціною і терміном ремонту, видно лише на md+ */}
        <Box
          flexBasis={{ base: "100%", md: "calc(50% - 12px)" }}
          display={{ base: "none", md: "block" }}
          p={4}
          borderRadius="md"
        >
          <VStack align="start" gap={4} w="100%">
            <Box>
              <Text textStyle="subtitle" color="text.grayDark">
                Koszt od:
              </Text>

              <PriceBlock title={`${price} $`} />
            </Box>

            <Box>
              <Text textStyle="subtitle" color="text.grayDark">
                Czas od:
              </Text>

              <PriceBlock title={`${repairTime} mies.`} />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};
