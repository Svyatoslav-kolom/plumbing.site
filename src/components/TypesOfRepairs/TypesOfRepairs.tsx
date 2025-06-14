import { Box, Heading, HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { RepairItem } from "../RepairItem";
import { repairs } from "./repairs";
import { useEffect, useCallback, useState } from "react";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import "./swiperOverrides.css";

export const TypesOfRepairs = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Функції для прокрутки слайдера вперед і назад
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Обробка вибору слайда для підсвічування активного
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box w="100%" overflow="visible">
      <Heading
        textStyle="pageTitle"
        maxW="800px"
        ml={{ base: "30px", md: "100px" }}
        mb={"20px"}
      >
        Rodzaje remontów, które wykonujemy
      </Heading>

      {isMobile ? (
        // Верстка для мобільних — вертикальний список
        <VStack gap={6} px={{ base: 0, md: 4 }}>
          {repairs.map((repair, index) => (
            <RepairItem
              key={index}
              imageSrc={repair.image}
              title={repair.title}
              description={repair.description}
              price={repair.price}
              repairTime={repair.repairTime}
              additionalInformation={repair.additionalInformation}
            />
          ))}
        </VStack>
      ) : (
        // Верстка для десктопу — карусель слайдів
        <Box ref={emblaRef} className="embla" position="relative">
          <Box className="embla__container">
            {repairs.map((repair, index) => (
              <Box className="embla__slide custom-slide" key={index}>
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

          {/* Кнопки для навігації слайдером */}
          <HStack justify="center">
            <Box
              as="button"
              onClick={scrollPrev}
              cursor="pointer"
              aria-label="Poprzedni slajd"
              position="absolute"
              top="50%"
              left="20%"
              transform="scaleX(-1)"
            >
              <Image src={ArrowRight} />
            </Box>

            <Box
              as="button"
              onClick={scrollNext}
              cursor="pointer"
              aria-label="Następny slajd"
              position="absolute"
              top="50%"
              right="20%"
            >
              <Image src={ArrowRight} />
            </Box>
          </HStack>

          {/* Індикатори слайдів */}
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
      )}
    </Box>
  );
};
