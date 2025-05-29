import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { repairSteps } from "./repairSteps.ts";
import { StagesItem } from "../StagesItem";

export const StagesOfWork = () => (
  <Box >
    <Heading
      textStyle={"pageTitle"}
      mb={6}
      maxW={"800px"}
    >
      Работа состоит из 6 этапов
    </Heading>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"40px"}>
      {repairSteps.map((step, index) => (
        <StagesItem
          key={index}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </SimpleGrid>
  </Box>
);
