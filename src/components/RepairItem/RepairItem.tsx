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

// Просто створюємо Motion компоненти
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

  const swiper = useSwiper()

  useEffect(() => {
    if (swiper) {
      setTimeout(() => {
        swiper.update()
      }, 0) // трохи затримки після анімації
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
      borderRadius={"15px"}
    >
      {/* Весь контент */}
      <Box w="100%" >
        {/* Зображення */}
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
              const target = e.target as HTMLImageElement
              target.src = defaultImage
            }}
          />
        </MotionBox>

        {/* Заголовок */}
        <Heading
          textStyle="blockTitle"
          color="accent.main"
          textAlign="center"
          w="100%"
          mt={isExpanded ? 0 : 4}
        >
          {title}
        </Heading>

        <Text
          textStyle="text"
          display={{ base: isExpanded ? "none" : "block", md: "block" }}
        >
          {description}
        </Text>

        {/* Блок з цінами */}
        <MotionBox
          initial={{
            opacity: 1,
            height: "auto",
          }}
          animate={{
            opacity: isExpanded ? 0 : 1,
            height: isExpanded ? 0 : "auto",
          }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          <HStack justify="center" mt={4} w={"100%"}>
            <VStack w={"50%"}>
              <Text textStyle="subtitle" color="text.grayDark">
                Стоимость от:
              </Text>
              <PriceBlock title={`${price} $`} />
            </VStack>

            <VStack w={"50%"}>
              <Text textStyle="subtitle" color="text.grayDark">
                Сроки от:
              </Text>
              <PriceBlock title={`${repairTime} міс.`} />
            </VStack>
          </HStack>
        </MotionBox>

        {/* Детальна картка */}
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

      {/* Кнопка завжди знизу */}
      <Box height="43px" w="180px">
        <ButtonStandart
          text={isExpanded ? "Кратко" : "Детальней"}
          isLargeText={false}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </Box>
    </VStack>
  )
}
