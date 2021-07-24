import { Box } from "@chakra-ui/react";
import { TopNavbar, Footer } from ".";

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Box fontSize="xl" w={["90%", "85%", "80%"]} maxW={800} mx="auto">
        <Box pt={10} pb={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default BasicLayout;
