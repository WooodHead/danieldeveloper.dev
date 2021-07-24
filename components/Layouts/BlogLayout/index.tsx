import { format, parseISO } from "date-fns";
import { PostMatter } from "../../../types/types";
import {
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { BlogMeta } from "./BlogMeta";

interface BlogLayoutProps {
  frontMatter: PostMatter;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, frontMatter }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <>
      <BlogMeta frontMatter={frontMatter} />
      <VStack mt={0} mb={6} spacing={1} align="start">
        <Heading as="h1" fontSize="3xl" lineHeight="shorter" fontWeight="bold">
          {frontMatter.title}
        </Heading>
        <Divider
          orientation="horizontal"
          opacity={1}
          borderBottomWidth={0}
          height={"1px"}
          bg={"gray.200"}
        />
      </VStack>
      <Flex
        marginBottom={6}
        justifyContent={"space-between"}
        flexDirection={["column", "row", "row"]}
      >
        <HStack spacing={2} isInline>
          <Text fontSize="sm" fontWeight="400" color={textColor}>
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
          </Text>
          <Text fontSize="sm" fontWeight="400" color={textColor}>
            •
          </Text>
          <Tooltip hasArrow label="Views" placement="top">
            <Flex alignItems="center">
              <Text
                fontSize="sm"
                noOfLines={1}
                fontWeight="400"
                align="left"
                color={textColor}
              >
                {0}
              </Text>
              <Icon as={FaEye} ml={1} color={textColor} />
            </Flex>
          </Tooltip>

          <Text fontSize="sm" fontWeight="600" color={textColor}>
            •
          </Text>
          <Tooltip hasArrow label="Read time" placement="top">
            <Text
              fontSize="sm"
              noOfLines={1}
              fontWeight="400"
              align="left"
              color={textColor}
            >
              {frontMatter.meta.text || "0 min read time"}
            </Text>
          </Tooltip>
        </HStack>
        <HStack spacing={1} alignItems="center">
          <span>Soy un tag</span>
        </HStack>
      </Flex>
      {children}
    </>
  );
};

export { BlogLayout };
