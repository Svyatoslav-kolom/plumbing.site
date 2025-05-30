import {
  Box,
  GridItem,
  SimpleGrid,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { IconLink } from "../IconLink";
import telegram from "../../assets/icons/SocialLinks/telegramIcon.svg";
import facebook from "../../assets/icons/SocialLinks/facebookIcon.svg";
import viber from "../../assets/icons/SocialLinks/viberIcon.svg";
import { ButtonStandart } from "../ButtonStandart";

interface FooterProps {
  setIsPrivacyOpen: (value: boolean) => void;
  setIsTermsOpen: (value: boolean) => void;
}

export const Footer = ({ setIsPrivacyOpen, setIsTermsOpen }: FooterProps) => (
  <Box bg="layout.background" color="white" py={{ base: 10, md: 12 }} px={{ base: 6, md: 20 }}>
    <SimpleGrid
      columns={{ base: 1, md: 4 }}
      gap={6}
    >
      {/* 1: Лого + соціалки */}
      <GridItem colSpan={1}>
        <VStack align="flex-start" gap={4}>
          <Box w="80px">
            <Logo />
          </Box>
          <HStack gap={3}>
            <IconLink icon={telegram} link={""} />
            <IconLink icon={viber} link={""} />
            <IconLink icon={facebook} link={""} />
          </HStack>
        </VStack>
      </GridItem>

      {/* 2: Контакти */}
      <GridItem colSpan={1}>
        <VStack align="flex-start" gap={1}>
          <Text textStyle="text">Remonty Krakówa. Wykończenia wnętrz.</Text>
          <Text textStyle="text">Email: kontakt@remontykrakova.pl</Text>
          <Text textStyle="text">Tel: +48 883 465 816</Text>
        </VStack>
      </GridItem>

      {/* 3: Адреса */}
      <GridItem colSpan={1}>
        <VStack align="flex-start" gap={1}>
          <Text textStyle="text">Adres:</Text>
          <Text textStyle="text">Y.B.O. Group Yurii Kryvoruchko</Text>
          <Text textStyle="text">ul. Łużycka 42/24</Text>
          <Text textStyle="text">30-658 Kraków</Text>
          <Text textStyle="text">NIP: 6793297267</Text>
        </VStack>
      </GridItem>

      {/* 4: Політика + копірайт */}
      <GridItem colSpan={1}>
        <VStack align="flex-start" gap={3} w="100%">
          <ButtonStandart
            onClick={() => setIsPrivacyOpen(true)}
            text={"Polityka prywatności"}
          />
          <ButtonStandart
            onClick={() => setIsTermsOpen(true)}
            text={"Regulamin"}
          />
          <Text textStyle="text" pt={2} fontSize="sm" alignSelf={"center"}>
            © {new Date().getFullYear()} Remonty Krakówa
          </Text>
        </VStack>
      </GridItem>
    </SimpleGrid>
  </Box>
);
