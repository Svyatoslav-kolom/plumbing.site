import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { repairSteps } from "./repairSteps.ts";
import { StagesItem } from "../StagesItem";

export const StagesOfWork = () => (
  <Box>
    {/* Заголовок секції з описом етапів */}
    <Heading
      textStyle={"pageTitle"}
      mb={6}
      maxW={"800px"}
    >
      Praca składa się z 6 etapów
    </Heading>

    {/* Сітка для відображення етапів ремонту */}
    <SimpleGrid
      columns={{ base: 2, md: 2, lg: 3 }}
      gap={"40px"}
      columnGap={{ base: "60px", md: "40px" }}
    >
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
