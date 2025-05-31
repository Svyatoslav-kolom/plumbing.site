import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  HStack,
  Image
} from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';
import { ButtonStandart } from '../ButtonStandart';
import { CustomSwitch } from '../CustomSwitch';
import { Logo } from '../Logo';

import calculatorIcon from "../../assets/icons/calculatorIcon.svg";
import contactsIcon from "../../assets/icons/contactsIcon.svg";
import { toaster } from '../ui/toaster';
import { useMode } from '../../utils/urlMode';

interface HeaderProps {
  onOpenRegister: (value: boolean) => void;
  onOpenContacts: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRegister, onOpenContacts }) => {
  const [mode, setMode] = useMode();
  const isDesign = mode === "design";

  const handleSwitchChange = (val: boolean) => {
    setMode(val ? "design" : "renovation");
  };

  return (
    <Box>
      {/* Logo */}
      <Box position="absolute" top="20px" left={{ md: "60px", xl: "100px" }}>
        <Box boxSize={{ md: "150px", xl: "186px" }}>
          <Logo />
        </Box>
      </Box>

      {/* Верхня панель*/}
      <Flex
        bg="layout.header"
        align="end"
        px="86px"
        h="135px"
        justify="space-between"
        pl={{ md: "230px", xl: "350px" }}
        pb={{ md: "0", xl: "15px" }}
      >
        <Flex
          align="center"
          gap={4}
          mb="15px"
          direction={{ md: "column", xl: "row" }}
          alignItems={{ md: "start", xl: "center" }}
        >
          <Text
            textStyle="text"
            cursor="pointer"
            onClick={() => {
              navigator.clipboard.writeText("kontakt@remontykrakova.pl");
              toaster.create({
                description: "E-mail został skopiowany",
                type: "success",
              });
            }}
            _hover={{ textDecoration: 'underline' }}
          >
            kontakt@remontykrakova.pl
          </Text>

          <Text textStyle="text">PN-WT 9:00–20:00</Text>

          <Flex align="center" gap={1}>
            <FaPhone />
            <Text
              textStyle="text"
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText("+48 883 465 816");
                toaster.create({
                  description: "Telefon został skopiowany",
                  type: "success",
                });
              }}
              _hover={{ textDecoration: 'underline' }}
            >
              +48 883 465 816
            </Text>
          </Flex>
        </Flex>

        <HStack height={"52px"} mb={{ md: "15px", xl: "0" }} gap="15px">
          <Box w="200px">
            <ButtonStandart text="Zgłoszenie" isLargeText={true} onClick={() => onOpenRegister(true)} />
          </Box>

          <Link
            _hover={{ textDecoration: "none", bg: "accent.dark" }}
            href="#calculator"
            height={"100%"}
            display={{ md: "block", xl: "none" }}
          >
            <Image src={calculatorIcon} height={"100%"} />
          </Link>

          <Button
            background={"transparent"}
            onClick={() => onOpenContacts(true)}
            p={0}
            height={"100%"}
            display={{ md: "block", xl: "none" }}
          >
            <Image src={contactsIcon} boxSize="40px" height={"100%"} />
          </Button>
        </HStack>
      </Flex>

      {/* Нижня панель */}
      <Flex
        bg="layout.background"
        px="44px"
        py="20px"
        align="center"
        wrap="wrap"
        pl={{ md: "230px", xl: "350px" }}
        textStyle="text"
      >
        <Flex gap={4} align="center" flexWrap="wrap">
          <Link color="text.white" href="#services">Rodzaje prac</Link>
          <Link color="text.white" href="#workflow">Etapy pracy</Link>
          <Link color="text.white" href="#portfolio">Portfolio</Link>
          <Link color="text.white" href="#masters">Zespół</Link>

          <Button
            as="a"
            //@ts-ignore
            href="#calculator"
            borderRadius="10px"
            px="25px"
            py="10px"
            color="text.white"
            bg="accent.main"
            _hover={{ textDecoration: "none", bg: "accent.dark" }}
            display={{ md: "none", xl: "block" }}
          >
            Kalkulator
          </Button>

          <Button
            borderRadius="10px"
            px="25px"
            py="10px"
            color="text.white"
            bg="accent.main"
            onClick={() => onOpenContacts(true)}
            _hover={{ bg: "accent.dark" }}
            display={{ md: "none", xl: "block" }}
          >
            Kontakt
          </Button>

          <Flex align="center" gap={2}>
            <Text color="text.white">Remont</Text>

            <CustomSwitch
              checked={isDesign}
              onChange={handleSwitchChange}
            />

            <Text color="text.white">Projekt</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
