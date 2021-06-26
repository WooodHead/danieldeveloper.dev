import { Box } from "@chakra-ui/react";

interface UnderlinedTextProps {
  color: string;
  h?: string;
  zIndex?: number;
}
export const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  children,
  h = "1px",
}) => (
  <Box as="span" display="inline-block" position="relative">
    {children}
    <Box
      as="span"
      display="block"
      position="absolute"
      bg={"gray.200"}
      w={"100%"}
      h={h}
      bottom={-2}
    />
  </Box>
);
