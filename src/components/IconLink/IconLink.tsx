import { Link } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  icon: string;
  link: string;
}

export const IconLink: FC<Props> = ({ icon, link }) => (
  <Link
    boxSize="55px"
    borderRadius="full"
    overflow="hidden"
    href={link}
  >
    <img
      src={icon}
      alt="Logo"
      style={{ width: '100%', height: '100%' }}
    />
  </Link>
);
