import { Box, BoxProps } from "@chakra-ui/react";
import { UnderlinedText } from ".";

interface HeaderProps extends BoxProps {
  underlineColor?: string;
  emoji?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  underlineColor,
  emoji,
  ...props
}) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left"
  >
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    {emoji ? " " + emoji : ""}
  </Box>
);
