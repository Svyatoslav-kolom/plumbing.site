import { HStack, VStack, Text, SimpleGrid, Box } from "@chakra-ui/react";
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
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 4 }}
    gap={10}
    bg={"layout.background"}
    py={"40px"}
    px={"100px"}
    color={"white"}
  >
    {/* Колонка 1: Logo + Social */}
    <VStack align="flex-start">
      <Logo />
      <HStack gap={4} pt={4}>
        <IconLink icon={telegram} link={""} />
        <IconLink icon={viber} link={""} />
        <IconLink icon={facebook} link={""} />
      </HStack>
    </VStack>

    {/* Колонка 2: Контакти */}
    <VStack align="flex-start">
      <Text textStyle="text">Remonty Krakówa. Wykończenia wnętrz.</Text>
      <Text textStyle="text">Email: kontakt@remontykrakova.pl</Text>
      <Text textStyle="text">Tel: +48 883 465 816</Text>
    </VStack>

    {/* Колонка 3: Адреса */}
    <VStack align="flex-start">
      <Text textStyle="text">Adres:</Text>
      <Text textStyle="text">Y.B.O. Group Yurii Kryvoruchko</Text>
      <Text textStyle="text">ul. Łużycka 42/24</Text>
      <Text textStyle="text">30-658 Kraków</Text>
      <Text textStyle="text">NIP: 6793297267</Text>
    </VStack>

    {/* Колонка 4: Політика */}
    <VStack align="flex-start">
      <Box width={"100%"}>
        <ButtonStandart onClick={() => setIsPrivacyOpen(true)} text={"Polityka prywatności"} />
      </Box>

      <Box width={"100%"}>
        <ButtonStandart onClick={() => setIsTermsOpen(true)} text={"Regulamin"} />
      </Box>


      <Text textStyle="text" pt={2}>© {new Date().getFullYear()} Remonty Krakówa</Text>
    </VStack>
  </SimpleGrid>
);
