import HeaderDescription from "./HeaderDescription";
import Highlights from "./Highlights";
import { highLights } from "../../config/highlights";
import { Flex } from "@chakra-ui/react";

export const Home = () => (
  <Flex direction="column" align="center">
    <HeaderDescription />
    <Highlights highlights={highLights} />
  </Flex>
);
