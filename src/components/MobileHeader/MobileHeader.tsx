import {
  Box,
  Button,
  HStack,
  Link,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import calculatorIcon from "../../assets/icons/calculatorIcon.svg";
import contactsIcon from "../../assets/icons/contactsIcon.svg";
import burgerMenu from "../../assets/icons/BurgerMenu.svg";
import closeButton from "../../assets/icons/CloseButton.svg";

import { CustomSwitch } from "../CustomSwitch";
import { ButtonStandart } from "../ButtonStandart";
import { useMode } from "../../utils/urlMode";

interface Props {
  onOpenContacts: (value: boolean) => void;
  onOpenMenu: (value: boolean) => void;
  onOpenRegister: (value: boolean) => void;
  isMenuOpen: boolean;
}

export const MobileHeader: React.FC<Props> = ({
  onOpenContacts,
  onOpenMenu,
  onOpenRegister,
  isMenuOpen,
}) => {
  const icon = isMenuOpen ? closeButton : burgerMenu;

  const [mode, setMode] = useMode();
  const isDesign = mode === "design";
  const handleSwitchChange = (val: boolean) => {
    setMode(val ? "design" : "renovation");
  };

  return (
    <Box>
      {/* Верхній блок */}
      <HStack
        height={"90px"}
        bg="layout.header"
        w={"100%"}
        px={"30px"}
        justifyContent={"space-between"}
      >
        <Box boxSize={"76px"}>
          <Logo />
        </Box>

        <HStack gap={"10px"}>
          <Link _hover={{ textDecoration: "none", bg: "accent.dark" }} href="#calculator">
            <Image src={calculatorIcon} boxSize="40px" />
          </Link>

          <Button
            background={"transparent"}
            onClick={() => onOpenContacts(true)}
            p={0}
          >
            <Image src={contactsIcon} boxSize="40px" />
          </Button>

          <Button
            background={"transparent"}
            onClick={() => onOpenMenu(!isMenuOpen)}
            p={0}
          >
            <Image src={icon} w="40px" />
          </Button>
        </HStack>
      </HStack>

      {/* Нижній блок */}
      <HStack
        height={"60px"}
        bg="layout.background"
        w={"100%"}
        px={"30px"}
        py={"13px"}
        justify={"space-between"}
      >
        <Flex align="center" gap={2}>
          <Text color="text.white">Ремонт</Text>
          <CustomSwitch
            checked={isDesign}
            onChange={handleSwitchChange}
          />
          <Text color="text.white">Дизайн</Text>
        </Flex>

        <Box height={"30px"}>
          <ButtonStandart text={"Заявка"} onClick={() => onOpenRegister(true)} />
        </Box>
      </HStack>
    </Box>
  );
};
