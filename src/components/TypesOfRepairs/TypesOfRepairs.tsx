import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { RepairItem } from "../RepairItem";
import { repairs } from "./repairs";
import { useEffect, useCallback, useState } from "react";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import "./swiperOverrides.css";

export const TypesOfRepairs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box w="100%" py={6} overflow="visible" id="services">
      <Heading
        textStyle={"pageTitle"}
        mb={6}
        maxW={"800px"}
        ml={"100px"}
      >
        Виды ремонта, которые мы выполняем
      </Heading>
      <Box ref={emblaRef} className="embla" position={"relative"}>
        <Box className="embla__container">
          {repairs.map((repair, index) => (
            <Box className={`embla__slide custom-slide`} key={index}>
              <Box
                className={index === selectedIndex ? "active-slide" : "inactive-slide"}
                w="100%"
              >
                <RepairItem
                  imageSrc={repair.image}
                  title={repair.title}
                  description={repair.description}
                  price={repair.price}
                  repairTime={repair.repairTime}
                  additionalInformation={repair.additionalInformation}
                />
              </Box>
            </Box>
          ))}
        </Box>

        <HStack justify="center">
          <Box
            as="button"
            onClick={scrollPrev}
            cursor="pointer"
            aria-label="Попередній слайд"
            position="absolute"
            top="50%"
            left={"22%"}
            transform="scaleX(-1)"
          >
            <Image src={ArrowRight} />
          </Box>
          <Box
            as="button"
            onClick={scrollNext}
            cursor="pointer"
            aria-label="Наступний слайд"
            position="absolute"
            top="50%"
            right={"22%"}
            color={"accent.main"}
            fontSize={"30px"}
          >
            <Image src={ArrowRight} />
          </Box>
        </HStack>

        {/* 🔘 Пагінація */}
        <HStack justify="center" mt={6} gap={2}>
          {repairs.map((_, index) => (
            <Box
              key={index}
              w="22px"
              h="22px"
              borderRadius="full"
              bg={index === selectedIndex ? "accent.main" : "blocks.main"}
              transition="background-color 0.3s"
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
