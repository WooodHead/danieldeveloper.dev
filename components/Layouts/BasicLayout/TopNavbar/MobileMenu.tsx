import { Box, Stack } from "@chakra-ui/react";
import { NavLinkProps } from "./NavLink";
import { Link } from "../../../../types/types";

interface MobileMenuProps {
  LinkComponent: React.FC<NavLinkProps>;
  links: Link[];
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  LinkComponent,
  links = [],
  onClose,
}) => (
  <Box
    pb={4}
    w={["100%", "100%", "80%"]}
    maxW={800}
    display={["inherit", "inherit", "none"]}
  >
    <Stack id="mobile-nav" as={"nav"} spacing={4} justify="center">
      {links
        .filter((link) => link.mobile)
        .map((link) => link.nested || link)
        .flat()
        .map((link) => (
          <LinkComponent key={link.name} link={link} onClose={onClose} />
        ))}
    </Stack>
  </Box>
);
