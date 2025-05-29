import { CloseButton, HStack, VStack, Text, Image, Stack } from "@chakra-ui/react";
import EmailIcon from "../../assets/icons/EmailIcon.svg";
import PhoneIcon from "../../assets/icons/PhoneIcon.svg";
import TimeIcon from "../../assets/icons/TimeIcon.svg";
import { IconLink } from "../IconLink";
import telegram from "../../assets/icons/SocialLinks/telegramIcon.svg";
import facebook from "../../assets/icons/SocialLinks/facebookIcon.svg";
import viber from "../../assets/icons/SocialLinks/viberIcon.svg";

interface Props {
  onClose: () => void;
}

export const Contacts: React.FC<Props> = ({ onClose }) => (
  <VStack
    bg="blocks.main"
    pt="10px"
    pb="30px"
    px="30px"
    borderRadius="15px"
  >

    <CloseButton onClick={onClose} alignSelf={"end"} />

    <Stack
      justifyContent={"space-between"}
      direction={{ base: "column", md: "row" }}
    >
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
          Контакти
        </Text>

        <HStack
          width={"100%"}
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
        >
          <Image src={EmailIcon} boxSize={{ base: "30px", md: "50px" }} />

          <Text>
            poshtaremont@gmail.com
          </Text>
        </HStack>

        <HStack
          width={"100%"}
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
        >
          <Image
            src={PhoneIcon}
            boxSize={{ base: "30px", md: "50px" }}
          />

          <Text>
            ПН-ВТ 9:00-8:00
          </Text>
        </HStack>

        <HStack
          width={"100%"}
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
        >
          <Image src={TimeIcon} boxSize={{ base: "30px", md: "50px" }} />

          <Text>
            +09734343434
          </Text>
        </HStack>
      </VStack>

      <VStack
        px={"35px"}
        py={"20px"}
      >
        <Text
          textStyle={"subtitle"}
          alignSelf={"start"}
          mb={{ base: 2, md: 5 }}
        >
          Ми в соц. мережах
        </Text>

        <HStack
          width={"100%"}
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
        >
          <IconLink icon={telegram} link={""} />

          <Text>
            remonty krakowa
          </Text>
        </HStack>

        <HStack
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
          width={"100%"}
        >
          <IconLink icon={viber} link={""} />

          <Text>
            remonty krakowa
          </Text>
        </HStack>

        <HStack
          width={"100%"}
          align={"center"}
          justify={"start"}
          gap={{ base: "15px", md: "30px" }}
        >
          <IconLink icon={facebook} link={""} />

          <Text>
            remonty krakowa
          </Text>
        </HStack>
      </VStack>
    </Stack>
  </VStack>
);
