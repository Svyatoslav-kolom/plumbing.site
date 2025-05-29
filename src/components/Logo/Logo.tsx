import { Box } from "@chakra-ui/react";
import logo from '../../assets/icons/logo.svg';

export const Logo = () => (
  <Box
    boxSize="186px"
    bg="white"
    borderRadius="full"
    overflow="hidden"
  >
    <img
      src={logo}
      alt="Logo"
      style={{ width: '100%', height: '100%' }}
    />
  </Box>
);
