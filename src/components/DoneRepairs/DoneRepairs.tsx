import { useState } from "react";
import { Box, Heading, Stack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { DoneRepairDetails } from "../DoneRepairDetails";
import { VerticalSlider } from "../VerticalSlider";
import { completedRepairs } from "./completedRepairs";
import { DoneRepairItemMobile } from "../DoneRepairItemMobile";
import { SwiperSlide, Swiper } from "swiper/react";
import "./swiper-pagination.css";
//@ts-ignore
import 'swiper/css/pagination';
//@ts-ignore
import 'swiper/css';
import { Pagination } from "swiper/modules";

export const DoneRepairs = () => {
  const [activeId, setActiveId] = useState(completedRepairs[0].details.id);
  const activeRepair = completedRepairs.find(r => r.details.id === activeId);

  // Перевірка: чи мобільна версія (base / sm)
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return (
      <Box padding={4}>
        <Heading textStyle="pageTitle" pb="12px" px="22px">
          Выполненые ремонты
        </Heading>

        {/* Кастомний контейнер для точок пагінації */}
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
          {completedRepairs.map((repair) => (
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
      h={{ md: "70vh", lg: "100vh" }}
    >
      <Heading textStyle={"pageTitle"} display={{ md: "block", xl: "none" }}>
        Выполненые ремонты
      </Heading>

      {activeRepair && (
        <VStack
          maxW={"490px"}
          justifyContent={"space-between"}
          height={"100%"}
          display={{ md: "none", xl: "flex" }}
        >
          <Heading textStyle={"pageTitle"}>
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
        repairDetails={completedRepairs}
        onActiveChange={setActiveId}
      />

    </Stack>
  );
};
