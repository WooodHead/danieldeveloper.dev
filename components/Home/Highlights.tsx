import NextLink from "next/link";
import {
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "../Common";
import { HighLight } from "../../config/highlights";

interface HighLightsProps {
  title?: string;
  highlights: HighLight[];
  animationDuration?: number;
}

const Highlights: React.FC<HighLightsProps> = ({
  title = "Highlights",
  highlights,
  animationDuration,
}) => (
  <MotionBox
    w="100%"
    opacity="0"
    initial={{
      translateY: 80,
    }}
    animate={{
      translateY: 0,
      opacity: 1,
      transition: {
        delay: animationDuration - 0.1,
        duration: animationDuration,
      },
    }}
  >
    <Box mt={10}>
      <Stack
        mb={10}
        mx={[0, 0, 10]}
        padding={4}
        align="start"
        borderLeft="4px solid"
        borderColor={"#53c8c4"}
        color={"whatsapp"}
        _hover={{ shadow: "lg" }}
        backgroundColor={useColorModeValue("gray.100", "#1e2533")}
        rounded="sm"
        fontSize="md"
      >
        <Text textAlign="center" color="#53c8c4" fontWeight="bold">
          {title}
        </Text>
        <UnorderedList textAlign="left" paddingLeft={5} m={0}>
          {highlights.map(({ href, title, badge }) => (
            <ListItem key={title}>
              <NextLink href={href} passHref>
                <Link>
                  {title}
                  {badge && (
                    <Badge ml="1" colorScheme={badge.color}>
                      {badge.text}
                    </Badge>
                  )}
                </Link>
              </NextLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Stack>
    </Box>
  </MotionBox>
);

export default Highlights;
