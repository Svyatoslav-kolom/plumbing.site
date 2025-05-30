// Header.tsx
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

interface HeaderProps {
  onOpenRegister: (value: boolean) => void;
  onOpenContacts: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRegister, onOpenContacts }) => {
  return (
    <Box>
      {/* Лого */}
      <Box position="absolute" top="20px" left={{ md: "60px", xl: "100px" }}>
        <Box boxSize={{ md: "150px", xl: "186px" }}>
          <Logo />
        </Box>
      </Box>

      {/* Верхний блок */}
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
          <Text textStyle="text">poshtaremont@gmail.com</Text>
          <Text textStyle="text">ПН-ВТ 9:00–8:00</Text>
          <Flex align="center" gap={1}>
            <FaPhone />
            <Text textStyle="text">+09734343434</Text>
          </Flex>
        </Flex>

        <HStack height={"52px"} mb={{ md: "15px", xl: "0" }} gap="15px">
          <Box w="200px" >
            <ButtonStandart text="Заявка" isLargeText={true} onClick={() => onOpenRegister(true)} />
          </Box>

          <Link _hover={{ textDecoration: "none", bg: "accent.dark" }} href="#calculator" height={"100%"} >
            <Image src={calculatorIcon} height={"100%"} />
          </Link>

          <Button
            background={"transparent"}
            onClick={() => onOpenContacts(true)}
            p={0}
            height={"100%"}
          >
            <Image src={contactsIcon} boxSize="40px" height={"100%"} />
          </Button>

        </HStack>

      </Flex>

      {/* Нижний блок */}
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
          <Link color="text.white" href="#services">Виды работы</Link>
          <Link color="text.white" href="#workflow">Этапы работы</Link>
          <Link color="text.white" href="#portfolio">Портфолио</Link>
          <Link color="text.white" href="#masters">Мастера</Link>

          <Link
            href="#calculator"
            borderRadius="10px"
            px="25px"
            py="10px"
            color="text.white"
            bg="accent.main"
            _hover={{ textDecoration: "none", bg: "accent.dark" }}
            display={{ md: "none", xl: "block" }}
          >
            Расчет
          </Link>

          <Button
            borderRadius="10px"
            px="25px"
            py="10px"
            color="text.white"
            bg="accent.main"
            onClick={() => onOpenContacts(true)}
            display={{ md: "none", xl: "block" }}
          >
            Контакты
          </Button>

          <Flex align="center" gap={2}>
            <Text color="text.white">Ремонт</Text>
            <CustomSwitch />
            <Text color="text.white">Дизайн</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
