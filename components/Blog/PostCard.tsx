import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
  Icon,
  Flex,
  Badge,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaEye } from "react-icons/fa";
import { PostMatter } from "../../types/types";
import { PageTransitions } from "../Common";

interface PostCardProps {
  post: PostMatter;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <PageTransitions.CardTransition>
      <VStack
        spacing={1}
        p={4}
        isExternal
        _hover={{ shadow: "md", textDecoration: "none" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        align="left"
      >
        <Heading fontSize="lg" align="left" my="2">
          <NextLink href={`/blog/${post.slug}`} passHref>
            <Link fontWeight="600" fontSize="1.2em">
              {post.title}
            </Link>
          </NextLink>

          {post.isNew && (
            <Badge
              position="absolute"
              right="0.5rem"
              top="-6px"
              ml="1"
              variant="solid"
              colorScheme="green"
            >
              NEW
            </Badge>
          )}
        </Heading>
        <Divider />
        <HStack spacing={2} isInline>
          <Tooltip hasArrow label="Published" placement="top">
            <Text fontSize="sm" fontWeight="400" color={textColor}>
              {post.publishedAt}
            </Text>
          </Tooltip>
          <Text fontSize="sm" fontWeight="400" color={textColor}>
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
              {post.meta.text || "0 min read time"}
            </Text>
          </Tooltip>
          <Text fontSize="sm" fontWeight="600" color={textColor}>
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
                {post.views || 0}
              </Text>
              <Icon as={FaEye} ml={1} color={textColor} />
            </Flex>
          </Tooltip>
        </HStack>

        <Text align="left" fontSize="md" noOfLines={4} color={textColor}>
          {post.summary}
        </Text>
      </VStack>
    </PageTransitions.CardTransition>
  );
};

export default PostCard;
