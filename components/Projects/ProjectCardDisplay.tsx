import Link from "next/link";
import {
  Box,
  Divider,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MotionBox, tagColorByLanguage } from "../Common";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { ProjectCardProps } from ".";
import { MdScreenShare, MdLink } from "react-icons/md";

const ProjectCardDisplay: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <Box
        cursor="pointer"
        size="xl"
        py={2}
        px={[2, 4]}
        mt={2}
        minHeight="175px"
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
                    as="a"
                    fontSize="sm"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    color={"blue.500"}
                    href={project.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
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
          <Box marginY="5">
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              {project.description}
            </Text>
          </Box>
          <Divider />
          <Box minWidth="100%">
            <HStack spacing="1" justify="flex-end" alignItems="center">
              <Link href={`/projects/${project.name}`}>
                <IconButton
                  size="lg"
                  fontSize="1.5em"
                  variant="ghost"
                  color="current"
                  marginLeft="3"
                  icon={<MdLink />}
                  aria-label={`See details of project ${project.name}`}
                  _hover={{
                    bg: useColorModeValue("gray.200", "gray.900"),
                  }}
                />
              </Link>

              <IconButton
                size="lg"
                fontSize="1.5em"
                variant="ghost"
                color="current"
                marginLeft="3"
                icon={<MdScreenShare />}
                aria-label={`Visit the project ${project.name}} live demo`}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default ProjectCardDisplay;
