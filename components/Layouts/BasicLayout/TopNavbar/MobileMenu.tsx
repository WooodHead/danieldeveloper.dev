import { Box, Stack } from "@chakra-ui/react";
import { Link, NavLinkProps } from ".";

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
    <Stack as={"nav"} spacing={4}>
      {links.map((link) => (
        <LinkComponent key={link.name} link={link} onClose={onClose} />
      ))}
    </Stack>
  </Box>
);
