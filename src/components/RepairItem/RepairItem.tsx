import {
  VStack,
  Image,
  Heading,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { PriceBlock } from "../PriceBlock"
import defaultImage from "../../assets/images/default.png"
import { ButtonStandart } from "../ButtonStandart"
import { RepairCard } from "../RepairCard"
import type { AdditionalInformation } from "../../types/RepairItem"
import type { FC } from "react"
import { useEffect, useState } from "react"
import { useSwiper } from "swiper/react"

interface Props {
  imageSrc: string
  title: string
  description: string
  price: number
  repairTime: number
  additionalInformation: AdditionalInformation
}

// MotionBox - анімований контейнер для плавних переходів
const MotionBox = motion.div

export const RepairItem: FC<Props> = ({
  imageSrc,
  title,
  description,
  price,
  repairTime,
  additionalInformation,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Отримуємо доступ до swiper, щоб оновити слайдер після зміни розміру
  const swiper = useSwiper()

  useEffect(() => {
    if (swiper) {
      setTimeout(() => {
        swiper.update() // Оновлення swiper для правильного відображення
      }, 0)
    }
  }, [isExpanded])

  return (
    <VStack
      w="100%"
      p="30px"
      gap={4}
      alignItems="center"
      justifyContent="space-between"
      bg="blocks.main"
      position="relative"
      borderRadius="15px"
    >
      {/* Основний контент картки */}
      <Box w="100%">
        {/* Зображення ремонту */}
        <MotionBox
          initial={false}
          animate={{
            opacity: isExpanded ? 0 : 1,
            height: isExpanded ? 0 : "auto",
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            objectFit="contain"
            w="100%"
            height={{ base: "100%", xl: "300px" }}
            onError={(e) => {
              // Якщо зображення не завантажилось — ставимо дефолтне
              const target = e.target as HTMLImageElement
              target.src = defaultImage
            }}
          />
        </MotionBox>

        {/* Заголовок ремонту */}
        <Heading
          textStyle="blockTitle"
          color="accent.main"
          textAlign="center"
          w="100%"
          mt={isExpanded ? 0 : 4}
        >
          {title}
        </Heading>

        {/* Короткий опис (ховаємо на мобільних при розгортанні) */}
        <Text
          textStyle="text"
          display={{ base: isExpanded ? "none" : "block", md: "block" }}
        >
          {description}
        </Text>

        {/* Блок з ціною і терміном ремонту */}
        <MotionBox
          initial={{ opacity: 1, height: "auto" }}
          animate={{
            opacity: isExpanded ? 0 : 1,
            height: isExpanded ? 0 : "auto",
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          <HStack justify="center" mt={4} w="100%">
            <VStack w="50%">
              <Text textStyle="subtitle" color="text.grayDark">
                Koszt od:
              </Text>
              <PriceBlock title={`${price} $`} />
            </VStack>

            <VStack w="50%">
              <Text textStyle="subtitle" color="text.grayDark">
                Czas od:
              </Text>
              <PriceBlock title={`${repairTime} mies.`} />
            </VStack>
          </HStack>
        </MotionBox>

        {/* Детальна інформація про ремонт (карточка) */}
        <MotionBox
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
            marginTop: isExpanded ? 16 : 0,
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          {/* Забороняємо взаємодію, коли блок схований */}
          <Box pointerEvents={isExpanded ? "auto" : "none"}>
            <RepairCard
              additionalInformation={additionalInformation}
              title={title}
              description={description}
              price={price}
              repairTime={repairTime}
            />
          </Box>
        </MotionBox>
      </Box>

      {/* Кнопка для розгортання/згортання */}
      <Box height="43px" w="180px">
        <ButtonStandart
          text={isExpanded ? "Krótko" : "Szczegóły"}
          isLargeText={false}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </Box>
    </VStack>
  )
}
