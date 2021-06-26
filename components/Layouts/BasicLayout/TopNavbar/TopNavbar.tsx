import { Box, Flex, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { MobileMenu } from "./MobileMenu";
import { WebMenu } from "./WebMenu";
import { NavLink } from "./NavLink";
import { navbarLinks } from "../../../../config/navbarLinks";

const TopNavbar: React.FC = () => {
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
            links={navbarLinks}
            LinkComponent={NavLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Flex>

        {isOpen && (
          <MobileMenu
            links={navbarLinks}
            onClose={onClose}
            LinkComponent={NavLink}
          />
        )}
      </Box>
    </>
  );
};

export default TopNavbar;
