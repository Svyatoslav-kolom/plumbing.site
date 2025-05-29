import { Box, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { DoneRepairItem } from '../DoneRepairItem';
import type { RepairDetails } from '../DoneRepairs/completedRepairs';

type VerticalSliderProps = {
  repairDetails: RepairDetails[];
  onActiveChange?: (id: number) => void;
};


export const VerticalSlider = ({ repairDetails, onActiveChange }: VerticalSliderProps) => {
  return (
    <Flex
      height="100vh"
      width="600px"
      overflow="hidden"
      position="relative"
    >
      <Box flex="1" overflow="hidden">
        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          mousewheel={true}
          loop={true}
          modules={[Mousewheel, Pagination]}
          className="custom-swiper"
          pagination={{ clickable: true }}
          style={{ height: '100%' }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            const activeItem = repairDetails[realIndex];
            if (activeItem && onActiveChange) {
              onActiveChange(activeItem.id);
            }
          }}
        >
          {repairDetails.map((detail) => (
            <SwiperSlide key={detail.id}>
              {({ isActive }) => (
                <DoneRepairItem
                  image={detail.imageUrl}
                  duration={detail.duration}
                  price={detail.price}
                  square={detail.square}
                  showDetails={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <style>{`
        .custom-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: grayscale(80%);
        }

        .custom-swiper .swiper-slide-active {
          transform: scale(1) translateY(0);
          z-index: 2;
          filter: none;
        }

        .custom-swiper .swiper-slide-prev {
          transform:  scaleX(0.5) scaleY(0.35);
          z-index: 1;
        }

        .custom-swiper .swiper-slide-next {
          transform:  scaleX(0.5) scaleY(0.35);
          z-index: 1;
        }

          .custom-swiper .swiper-slide-prev,
          .custom-swiper .swiper-slide-next {
            opacity: 0.7;
            z-index: 1;
          }
            
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: var(--chakra-colors-blocks-secondary);
          opacity: 1;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
          margin: 6px 0;
        }

        .swiper-pagination-bullet-active {
          background-color: var(--chakra-colors-accent-main);
        }
      `}</style>
    </Flex>
  );
};
