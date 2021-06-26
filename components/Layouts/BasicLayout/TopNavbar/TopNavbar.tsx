import { Box, Flex, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { MobileMenu } from "./MobileMenu";
import { WebMenu } from "./WebMenu";
import { NavLink } from "./NavLink";
import { Link } from "./types";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";

const links: Link[] = [
  { name: "About", path: "/about", mobile: true },
  { name: "Blog", path: "/blog", mobile: true, icon: BsBook },
  {
    name: "Links",
    path: "",
    nested: [
      {
        name: "Tech Stack",
        path: "/tech-stack",
        icon: AiTwotoneThunderbolt,
        mobile: true,
      },
      {
        name: "Developer story",
        path: "/developer-story",
        icon: MdTimeline,
        mobile: true,
      },
    ],
    mobile: true,
  },
];

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
            links={links}
            LinkComponent={NavLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Flex>

        {isOpen && (
          <MobileMenu links={links} onClose={onClose} LinkComponent={NavLink} />
        )}
      </Box>
    </>
  );
};

export default TopNavbar;
