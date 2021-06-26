import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { Link } from "./types";

export interface NavLinkProps {
  link: Link;
  onClose: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, onClose }) => {
  const linkProperties = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <NextLink href={link.path} passHref>
      <ChakraLink
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: linkProperties.bg,
        }}
        _activeLink={{
          color: linkProperties.color,
        }}
        onClick={() => onClose()}
      >
        {link.name}
      </ChakraLink>
    </NextLink>
  );
};
