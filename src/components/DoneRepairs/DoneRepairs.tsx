import { useState } from "react";
import { Heading, Stack, VStack } from "@chakra-ui/react";
import { DoneRepairDetails } from "../DoneRepairDetails";
import { VerticalSlider } from "../VerticalSlider";
import { completedRepairs } from "./completedRepairs";

export const DoneRepairs = () => {
  const [activeId, setActiveId] = useState(completedRepairs[0].details.id);

  const activeRepair = completedRepairs.find(r => r.details.id === activeId);

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      height="100vh"
    >
      {activeRepair && (
        <VStack
          maxW={"490px"}
          // justifyContent={"space-between"}
          gap={"40px"}
        >
          <Heading
            textStyle={"pageTitle"}
          >
            Выполненые ремонты
          </Heading>

          <DoneRepairDetails
            id={activeRepair.id}
            title={activeRepair.title}
            description={activeRepair.description}
            repairFeatures={activeRepair.repairFeatures}
          />
        </VStack>

      )}

      <VerticalSlider
        repairDetails={completedRepairs.map(r => r.details)}
        onActiveChange={setActiveId}
      />
    </Stack>
  );
};
