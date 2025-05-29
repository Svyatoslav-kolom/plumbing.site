import { VStack, Link, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";

import homeIcon from "../../assets/icons/MobileMenu/homeIcon.svg";
import toolsIcon from "../../assets/icons/MobileMenu/toolsIcon.svg";
import stagesIcon from "../../assets/icons/MobileMenu/stagesIcon.svg";
import portfolioIcon from "../../assets/icons/MobileMenu/portfolioIcon.svg";
import mastersIcon from "../../assets/icons/MobileMenu/mastersIcon.svg";

interface MenuItem {
  icon: string;
  label: string;
  href: string;
}

interface Props {
  onCloseMenu: () => void;
}

const menuItems: MenuItem[] = [
  { icon: homeIcon, label: "Главная", href: "" },
  { icon: toolsIcon, label: "Виды работы", href: "#services" },
  { icon: stagesIcon, label: "Этапы работы", href: "#workflow" },
  { icon: portfolioIcon, label: "Портфолио", href: "#portfolio" },
  { icon: mastersIcon, label: "Мастера", href: "#masters" },
];

export const MobileHeaderMenu: FC<Props> = ({ onCloseMenu }) => {
  return (
    <VStack
      position="fixed"
      top={"90px"}
      left={0}
      right={0}
      zIndex={1000}
      bg={"white"}
      backdropFilter="blur(8px)"
      align="stretch"
      gap={0}
      border="1px solid #e0e0e0"
    >
      {menuItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onCloseMenu}
          display="flex"
          alignItems="center"
          gap={3}
          px={4}
          py={3}
          _hover={{ textDecoration: "none", bg: "gray.50" }}
          borderBottom={index !== menuItems.length - 1 ? "1px solid #e0e0e0" : "none"}
        >
          <Image src={item.icon} boxSize="40px" />
          <Text textStyle="text">{item.label}</Text>
        </Link>
      ))}
    </VStack>
  );
};
