import { useState } from "react";
import { Box, Heading, Stack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { DoneRepairDetails } from "../DoneRepairDetails";
import { VerticalSlider } from "../VerticalSlider";
import { completedRepairs } from "./completedRepairs";
import { DoneRepairItemMobile } from "../DoneRepairItemMobile";
import { SwiperSlide, Swiper } from "swiper/react";
import "./swiper-pagination.css";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css";
import { Pagination } from "swiper/modules";
import { useMode } from "../../utils/urlMode";
import { completedDesigns } from "./completedDesigns";

export const DoneRepairs = () => {
  const [mode] = useMode();
  const currentRepairs = mode === "design" ? completedDesigns : completedRepairs;

  const [activeId, setActiveId] = useState(currentRepairs[0].details.id);
  const activeRepair = currentRepairs.find(r => r.details.id === activeId);

  // Перевірка, чи це мобільна версія (base / sm)
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return (
      <Box padding={4}>
        <Heading textStyle="pageTitle" pb="12px" px="22px">
          {mode === "design" ? "Wykonane projekty" : "Wykonane remonty"}
        </Heading>

        {/* Контейнер для кастомних точок пагінації */}
        <Box
          className="done-repairs-pagination"
          display="flex"
          justifyContent="center"
          mb={4}
        />

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".done-repairs-pagination",
            clickable: true,
          }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
        >
          {currentRepairs.map((repair) => (
            <SwiperSlide key={repair.details.id}>
              <DoneRepairItemMobile
                title={repair.title}
                image={repair.details.imageUrl}
                description={repair.description}
                repairFeatures={repair.repairFeatures}
                repairDetails={repair.details}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // 🖥️ Десктопна версія
  return (
    <Stack
      flexDirection={{ md: "column", xl: "row" }}
      justifyContent="space-between"
      h={{ md: "70vh", lg: "110vh" }}
    >
      <Heading textStyle="pageTitle" display={{ md: "block", xl: "none" }}>
        {mode === "design" ? "Wykonane projekty" : "Wykonane remonty"}
      </Heading>

      {activeRepair && (
        <VStack
          maxW="500px"
          w={"50%"}
          gap="40px"

          display={{ md: "none", xl: "flex" }}
        >
          <Heading textStyle="pageTitle" mt={"20px"}>
            {mode === "design" ? "Wykonane projekty" : "Wykonane remonty"}
          </Heading>

          <DoneRepairDetails
            id={activeRepair.id}
            title={activeRepair.title}
            description={activeRepair.description}
            repairFeatures={activeRepair.repairFeatures}
          />
        </VStack>
      )}

      <Box position="relative">
        <VerticalSlider repairDetails={currentRepairs} onActiveChange={setActiveId} />

        {/* "Туман" знизу */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="300px"
          bg="linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0))"
          pointerEvents="none"
        />
      </Box>


    </Stack>
  );
};
