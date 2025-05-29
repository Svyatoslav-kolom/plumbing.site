// Header.tsx
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';
import { ButtonStandart } from '../ButtonStandart';
import { CustomSwitch } from '../CustomSwitch';
import { Logo } from '../Logo';

interface HeaderProps {
  onOpenRegister: (value: boolean) => void;
  onOpenContacts: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRegister, onOpenContacts }) => {
  return (
    <Box>
      {/* Лого */}
      <Box position="absolute" top="20px" left="100px">
        <Logo />
      </Box>

      {/* Верхний блок */}
      <Flex
        bg="#D3E2E4"
        align="end"
        px="86px"
        h="135px"
        justify="space-between"
        pl="350px"
        pb="15px"
      >
        <Flex align="center" gap={4} mb="15px">
          <Text textStyle="text">poshtaremont@gmail.com</Text>
          <Text textStyle="text">ПН-ВТ 9:00–8:00</Text>
          <Flex align="center" gap={1}>
            <FaPhone />
            <Text textStyle="text">+09734343434</Text>
          </Flex>
        </Flex>

        <Box w="200px" h="76px">
          <ButtonStandart text="Заявка" isLargeText={true} onClick={() => onOpenRegister(true)} />
        </Box>
      </Flex>

      {/* Нижний блок */}
      <Flex
        bg="#6AB4E5"
        px="44px"
        py="20px"
        align="center"
        wrap="wrap"
        pl="350px"
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
