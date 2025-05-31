import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { DoneRepairItem } from '../DoneRepairItem';
import { DoneRepairItemMobile } from '../DoneRepairItemMobile';
import type { RepairFeature } from '../../types/repairsTypes';

type VerticalSliderProps = {
  repairDetails: RepairFeature[]; // Масив деталей ремонту або дизайну
  onActiveChange?: (id: number) => void; // Колбек при зміні активного слайду
};

export const VerticalSlider = ({ repairDetails, onActiveChange }: VerticalSliderProps) => {
  // Визначаємо, чи мобільний розмір екрану (base і md — мобільні, xl — десктоп)
  const isMobile = useBreakpointValue({ base: true, md: true, xl: false });

  return (
    <Flex height="100%" width="100%" overflow="hidden" position="relative">
      <Box flex="1" overflow="hidden">
        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          mousewheel={true}
          loop={true}
          modules={[Mousewheel]}
          className="custom-swiper"
          pagination={{ clickable: true }}
          style={{ height: '100%' }}
          onSlideChange={(swiper) => {
            // Визначаємо активний слайд і викликаємо колбек з його id
            const realIndex = swiper.realIndex;
            const activeItem = repairDetails[realIndex];
            if (activeItem && onActiveChange) {
              onActiveChange(activeItem.id);
            }
          }}
        >
          {repairDetails.map(({ details, ...feature }) => (
            <SwiperSlide key={details.id}>
              {({ isActive }) =>
                isMobile ? (
                  <DoneRepairItemMobile
                    title={feature.title}
                    image={details.imageUrl}
                    description={feature.description}
                    repairFeatures={feature.repairFeatures}
                    repairDetails={details}
                  />
                ) : (
                  <DoneRepairItem
                    image={details.imageUrl}
                    duration={details.duration}
                    price={details.price}
                    square={details.square}
                    showDetails={isActive}
                  />
                )
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Стилі для ефектів слайдів */}
      <style>{`
        .custom-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: blur(4px); /* Rozmycie domyślne */
          transform: scale(0.8);
          opacity: 0.6;
          z-index: 1;
        }

        .custom-swiper .swiper-slide-active {
          filter: none; /* Aktywny slajd bez rozmycia */
          transform: scale(1) translateY(0);
          opacity: 1;
          z-index: 2;
        }
      `}</style>
    </Flex>
  );
};
