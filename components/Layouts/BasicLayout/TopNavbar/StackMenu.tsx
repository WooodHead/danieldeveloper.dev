import {
  HStack,
  Button,
  Text,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import NextLink from "next/link";
import { Link } from "../../../../types/types";

interface StackMenuProps {
  menuAttributes: {
    bg: string;
    color: string;
  };
  links: Link[];
}

export const StackMenu: React.FC<StackMenuProps> = ({
  menuAttributes,
  links,
}) => (
  <Menu isLazy>
    {({ isOpen, onClose }) => (
      <>
        <MenuButton
          id="menu-button"
          as={Button}
          variant="ghost"
          size="sm"
          px={2}
          py={1.5}
          fontSize={"1em"}
          rounded={"md"}
          height={"auto "}
          _hover={menuAttributes}
          _expanded={menuAttributes}
          _focus={{ boxShadow: "outline" }}
          rightIcon={<BiChevronDown size={18} />}
        >
          Links
        </MenuButton>
        <MenuList zIndex={5}>
          {links.map((link) => (
            <NextLink key={link.path} href={link.path} passHref>
              <ChakraLink onClick={onClose}>
                <MenuItem>
                  <HStack>
                    {link.icon && (
                      <Icon
                        as={link.icon}
                        size={18}
                        color={menuAttributes.color}
                      />
                    )}

                    <Text>{link.name}</Text>
                  </HStack>
                </MenuItem>
              </ChakraLink>
            </NextLink>
          ))}
        </MenuList>
      </>
    )}
  </Menu>
);
