import { Box, HStack, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/navigation';
//@ts-ignore
import 'swiper/css/pagination';

import ArrowRight from "../../assets/icons/ArrowRight.svg";

import type { RepairFormData } from '../../types/formData';
import { Step1 } from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import { calculatePrices } from '../../utils/calcPrice';

interface CalculatorProps {
  setPrices: React.Dispatch<React.SetStateAction<{
    workPrice: number;
    materialPrice: number;
    total: number;
  }>>;
}

export default function Calculator({ setPrices }: CalculatorProps) {
  const [formData, setFormData] = useState<RepairFormData>({
    repairType: 'cosmetic',
    housingType: 'new',
    area: 0,
    ceilingHeight: 2.5,
    rooms: 1,
    demolition: false,
    wallAlignment: false,
  });

  const swiperRef = useRef<any>(null);

  const steps = [Step1, Step2, Step3, Step4];

  useEffect(() => {
    const newPrices = calculatePrices(formData);
    setPrices(newPrices);
  }, [formData, setPrices]);

  return (
    <Box maxW="500px" mx="auto">
      <Box position="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          allowTouchMove={false}
        >
          {steps.map((StepComponent, index) => (
            <SwiperSlide key={index}>
              <Box
                bg="blocks.main"
                pt="10px"
                pb="30px"
                px="60px"
                borderRadius="15px"
                h="480px"
              >
                <StepComponent formData={formData} setFormData={setFormData} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Стрілки */}
        <HStack
          justify="space-between"
          position="absolute"
          top="90%"
          w="100%"
          px={6}
          transform="translateY(-50%)"
          zIndex={10}
        >
          <Box as="button" onClick={() => swiperRef.current?.slidePrev()} cursor="pointer">
            <Image src={ArrowRight} transform="scaleX(-1)" />
          </Box>
          <Box as="button" onClick={() => swiperRef.current?.slideNext()} cursor="pointer">
            <Image src={ArrowRight} />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
