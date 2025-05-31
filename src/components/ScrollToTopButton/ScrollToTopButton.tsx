import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import arrowUpIcon from "../../assets/icons/arrowUp.svg";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // показувати кнопку лише після певної прокрутки
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      position="fixed"
      bottom="40px"
      right="30px"
      zIndex={999}
      cursor="pointer"
      boxSize="50px"
      display={isVisible ? "block" : "none"}
      onClick={scrollToTop}
    >
      <Image src={arrowUpIcon} alt="Go to top" boxSize="100%" />
    </Box>
  );
};
