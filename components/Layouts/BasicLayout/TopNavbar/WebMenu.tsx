import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// import { ColorModeSwitcher } from "../ui/ColorModeSwitcher";
// import UserIcon from "assets/images/user_icon.png";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import NextLink from "next/link";
import { Link, NavLinkProps } from ".";

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
  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

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
          {links.map((link) => (
            <LinkComponent key={link.name} link={link} onClose={onClose} />
          ))}
          <Menu isLazy>
            {({ isOpen, onClose }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px={2}
                  py={1.5}
                  fontSize={"1em"}
                  rounded={"md"}
                  height={"auto "}
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: "outline" }}
                  rightIcon={<BiChevronDown size={18} />}
                >
                  Links
                </MenuButton>
                <MenuList zIndex={5}>
                  <NextLink href={"/tech-stack"} passHref>
                    <ChakraLink onClick={onClose}>
                      <MenuItem>
                        <HStack>
                          <Icon
                            as={AiTwotoneThunderbolt}
                            size={18}
                            color={menuProps.color}
                          />
                          <Text>Tech Stack</Text>
                        </HStack>
                      </MenuItem>
                    </ChakraLink>
                  </NextLink>
                  <NextLink href={"/open-source"} passHref>
                    <ChakraLink onClick={onClose}>
                      <MenuItem>
                        <HStack>
                          <Icon as={BsBook} size={18} color={menuProps.color} />
                          <Text>Open Source</Text>
                        </HStack>
                      </MenuItem>
                    </ChakraLink>
                  </NextLink>
                  <NextLink href={"/developer-story"} passHref>
                    <ChakraLink onClick={onClose}>
                      <MenuItem>
                        <HStack>
                          <Icon
                            as={MdTimeline}
                            size={18}
                            color={menuProps.color}
                          />
                          <Text>Developer Story</Text>
                        </HStack>
                      </MenuItem>
                    </ChakraLink>
                  </NextLink>
                  <NextLink href={"/achievements"} passHref>
                    <ChakraLink onClick={onClose}>
                      <MenuItem>
                        <HStack>
                          <Icon
                            as={BsCheckCircle}
                            size={18}
                            color={menuProps.color}
                          />
                          <Text>Achievements</Text>
                        </HStack>
                      </MenuItem>
                    </ChakraLink>
                  </NextLink>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </HStack>
      <Flex alignItems={"center"}>
        <IconButton
          as={ChakraLink}
          href={"https://github.com/MA-Ahmad"}
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
