import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { accounts } from "../../../config/accounts";

export const Footer: React.FC = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} Daniel Romero
        </Text>

        <Box textAlign="center">
          {accounts.map((account) => (
            <IconButton
              key={account.key}
              as={Link}
              isExternal
              href={account.profile}
              aria-label={account.title}
              colorScheme={account.color}
              icon={<account.icon />}
              variant="ghost"
              size="lg"
              isRound
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};
