import { Box, Image } from "@chakra-ui/react";
import logo from '../../assets/icons/logo.svg';

export const Logo = () => (
  <Box
    bg="white"
    borderRadius="full"
    overflow="hidden"
    w={"100%"}
    height={"100%"}
  >
    <Image
      src={logo}
      alt="Logo"
      style={{ width: '100%', height: '100%' }}
    />
  </Box>
);
