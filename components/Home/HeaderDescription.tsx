import { Flex, Avatar, Box } from "@chakra-ui/react";
import { Header, MotionBox, MotionFlex } from "../../components/Common";
import { GITHUB } from "../../config/accounts";

interface HeaderDescriptionProps {
  animationDuration?: number;
  underlineColor?: string;
}

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  animationDuration = 0.5,
  underlineColor = "#ff9400",
}) => (
  <Flex direction={["column", "column", "row"]}>
    <MotionBox
      opacity="0"
      initial={{
        translateX: -150,
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
        transition: {
          duration: animationDuration,
        },
      }}
      m="auto"
      mb={[16, 16, "auto"]}
    >
      <Avatar size={"2xl"} src={GITHUB.avatar} />
    </MotionBox>
    <MotionFlex
      ml={["auto", "auto", 16]}
      m={["auto", "initial"]}
      w={["90%", "85%", "80%"]}
      maxW="800px"
      opacity="0"
      justify="center"
      direction="column"
      initial={{
        opacity: 0,
        translateX: 150,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        transition: {
          duration: animationDuration,
        },
      }}
    >
      <Header underlineColor={underlineColor} emoji="👋" mt={0}>
        Hey!
      </Header>
      <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
        My name in this life is{" "}
        <Box as="strong" fontWeight="600">
          Daniel Romero
        </Box>{" "}
        and I&apos;m a{" "}
        <Box as="span" whiteSpace="nowrap">
          Software Developer{" "}
        </Box>
        from{" "}
        <Box as="span" whiteSpace="nowrap">
          Spain 🇪🇸
        </Box>
      </Box>
      <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
        This is the place where I want to share all my knowledge and hopefully
        make you jump to the next level in your programming career while
        enjoying life at the same time.
        <Box as="span" whiteSpace="nowrap">
          💻😁{" "}
        </Box>
      </Box>
    </MotionFlex>
  </Flex>
);

export default HeaderDescription;
