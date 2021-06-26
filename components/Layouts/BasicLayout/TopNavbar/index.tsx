import {
  Box,
  Flex,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { MobileMenu } from "./MobileMenu";
import { WebMenu } from "./WebMenu";
import NextLink from "next/link";

export type Link = {
  name: string;
  path: string;
};

const webLinks: Link[] = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const mobileLinks: Link[] = [
  { name: "About", path: "/about" },
  { name: "Open Source", path: "/open-source" },
  { name: "Blog", path: "/blog" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Developer Story", path: "/developer-story" },
];

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
      <Link
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
        // to={props.path}
      >
        {link.name}
      </Link>
    </NextLink>
  );
};

export const TopNavbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <WebMenu
            links={webLinks}
            LinkComponent={NavLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Flex>

        {isOpen && (
          <MobileMenu
            links={mobileLinks}
            onClose={onClose}
            LinkComponent={NavLink}
          />
        )}
      </Box>
    </>
  );
};
