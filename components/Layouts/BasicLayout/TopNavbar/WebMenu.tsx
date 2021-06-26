import NextLink from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "../../../Common";
import { Link } from "../../../../types/types";
import { NavLinkProps } from "./NavLink";
import { StackMenu } from "./StackMenu";
import { accounts } from "../../../../config/accounts";

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
            <Avatar as={ChakraLink} size={"sm"} src={accounts.github.avatar} />
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
        <Tooltip label="Github Account" aria-label="Github Account">
          <IconButton
            as={ChakraLink}
            href={accounts.github.profile}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="1.5em"
            size="lg"
            icon={<FaGithub />}
            aria-label={"Github account"}
            bg={useColorModeValue("white", "gray.700")}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.900"),
            }}
          />
        </Tooltip>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </>
  );
};
