import { Box } from "@chakra-ui/react";
import { TopNavbar } from ".";

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={10} pb={10}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default BasicLayout;
