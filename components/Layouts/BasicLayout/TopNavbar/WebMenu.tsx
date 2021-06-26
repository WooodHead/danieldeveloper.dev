import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// import { ColorModeSwitcher } from "../ui/ColorModeSwitcher";
// import UserIcon from "assets/images/user_icon.png";
import NextLink from "next/link";
import { Link } from "../../../../types/types";
import { NavLinkProps } from "./NavLink";
import { StackMenu } from "./StackMenu";

interface WebMenuProps {
  LinkComponent: React.FC<NavLinkProps>;
  links: Link[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const WebMenu: React.FC<WebMenuProps> = ({
  links = [],
  LinkComponent,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <IconButton
        size={"md"}
        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        aria-label={"Open Menu"}
        display={["inherit", "inherit", "none"]}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8} alignItems={"center"}>
        <Box>
          <NextLink href={"/"} passHref>
            <Avatar
              as={ChakraLink}
              size={"sm"}
              // src={UserIcon}
              src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
            />
          </NextLink>
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => {
            return link.nested ? (
              <StackMenu
                key={link.name}
                menuAttributes={{
                  bg: useColorModeValue("gray.200", "gray.900"),
                  color: useColorModeValue("blue.500", "blue.200"),
                }}
                links={link.nested}
              />
            ) : (
              <LinkComponent key={link.name} link={link} onClose={onClose} />
            );
          })}
        </HStack>
      </HStack>
      <Flex alignItems={"center"}>
        <IconButton
          as={ChakraLink}
          href={"https://github.com/Ranacode"}
          size={"md"}
          icon={<FaGithub />}
          aria-label={"Github account"}
          bg={useColorModeValue("white", "gray.700")}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.900"),
          }}
        />
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      </Flex>
    </>
  );
};
