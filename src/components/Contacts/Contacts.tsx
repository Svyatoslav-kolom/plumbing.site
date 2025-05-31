import {
  CloseButton,
  HStack,
  VStack,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";
import EmailIcon from "../../assets/icons/EmailIcon.svg";
import PhoneIcon from "../../assets/icons/PhoneIcon.svg";
import TimeIcon from "../../assets/icons/TimeIcon.svg";
import { IconLink } from "../IconLink";
import telegram from "../../assets/icons/SocialLinks/telegramIcon.svg";
import facebook from "../../assets/icons/SocialLinks/facebookIcon.svg";
import viber from "../../assets/icons/SocialLinks/viberIcon.svg";
import { toaster } from "../ui/toaster";

interface Props {
  onClose: () => void;
}

export const Contacts: React.FC<Props> = ({ onClose }) => {
  return (
    <VStack
      bg="blocks.main"
      pt="10px"
      pb="30px"
      px="30px"
      borderRadius="15px"
    >
      <CloseButton onClick={onClose} alignSelf={"end"} />

      {/* Основний блок з контактною інформацією */}
      <Stack
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        {/* Контактна інформація */}
        <VStack
          px={"35px"}
          py={"20px"}
          bg="blocks.secondary"
          borderRadius="15px"
        >
          <Text
            textStyle={"subtitle"}
            alignSelf={"start"}
            mb={{ base: 2, md: 5 }}
          >
            Kontakt
          </Text>

          <HStack
            width={"100%"}
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
          >
            <Image src={EmailIcon} boxSize={{ base: "30px", md: "50px" }} />
            <Text
              textStyle="text"
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText("kontakt@remontykrakova.pl");
                toaster.create({
                  description: "Email został skopiowany",
                  type: "success",
                });
              }}
              _hover={{ textDecoration: "underline" }}
            >
              kontakt@remontykrakova.pl
            </Text>
          </HStack>

          <HStack
            width={"100%"}
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
          >
            <Image src={PhoneIcon} boxSize={{ base: "30px", md: "50px" }} />
            <Text textStyle="text">
              Pn-Wt 9:00-20:00
            </Text>
          </HStack>

          <HStack
            width={"100%"}
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
          >
            <Image src={TimeIcon} boxSize={{ base: "30px", md: "50px" }} />
            <Text
              textStyle="text"
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText("+48 883 465 816");
                toaster.create({
                  description: "Numer telefonu został skopiowany",
                  type: "success",
                });
              }}
              _hover={{ textDecoration: "underline" }}
            >
              +48 883 465 816
            </Text>
          </HStack>
        </VStack>

        {/* Соцмережі */}
        <VStack px={"35px"} py={"20px"}>
          <Text
            textStyle={"subtitle"}
            alignSelf={"start"}
            mb={{ base: 2, md: 5 }}
          >
            Jesteśmy w sieciach społecznościowych
          </Text>

          <HStack
            width={"100%"}
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
          >
            <IconLink icon={telegram} link={""} />
            <Text textStyle="text">remonty krakowa</Text>
          </HStack>

          <HStack
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
            width={"100%"}
          >
            <IconLink icon={viber} link={""} />
            <Text textStyle="text">remonty krakowa</Text>
          </HStack>

          <HStack
            width={"100%"}
            align={"center"}
            justify={"start"}
            gap={{ base: "15px", md: "30px" }}
          >
            <IconLink icon={facebook} link={""} />
            <Text textStyle="text">remonty krakowa</Text>
          </HStack>
        </VStack>
      </Stack>
    </VStack>
  );
};
