import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { MotionBox, tagColorByLanguage } from "../Common";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

import { GithubRepositoryType } from "../../lib/network/types/GithubRepositoryType";

interface ProjectCardProps {
  project: GithubRepositoryType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <Box
        size="xl"
        py={2}
        px={[2, 4]}
        mt={2}
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          shadow: "lg",
          textDecoration: "none",
        }}
      >
        <VStack overflow="hidden" align="start" spacing={1}>
          <VStack spacing={1} align="start" w="100%">
            <Flex justifyContent={"space-between"} width="100%">
              <Tooltip hasArrow label="Github link" placement="top">
                <HStack cursor={"pointer"}>
                  <Icon as={FiGithub} boxSize="0.9em" mt={"1px"} />
                  <Text
                    fontSize="sm"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    color={"blue.500"}
                  >
                    {project.full_name}
                  </Text>
                </HStack>
              </Tooltip>
              <HStack cursor={"pointer"}>
                {project.forks_count && (
                  <Box _hover={{ color: "blue.500" }}>
                    <Icon as={BiGitRepoForked} boxSize="0.9em" mt={"1px"} />
                    <Box as="span" ml="1" fontSize="sm">
                      {project.forks_count}
                    </Box>
                  </Box>
                )}
                <Box _hover={{ color: "blue.500" }}>
                  <Icon as={BiStar} boxSize="0.9em" mt={"1px"} />
                  <Box as="span" ml="1" fontSize="sm">
                    {project.stargazers_count}
                  </Box>
                </Box>
              </HStack>
            </Flex>
            {project.language && (
              <Flex justifyContent={"space-between"} width="100%">
                <Box>
                  <HStack spacing="1">
                    <Tag
                      size="sm"
                      colorScheme={tagColorByLanguage(project.language)}
                    >
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {project.language}
                      </Text>
                    </Tag>
                  </HStack>
                </Box>
              </Flex>
            )}
          </VStack>
          <Box>
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              {project.description}
            </Text>
          </Box>{" "}
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;
