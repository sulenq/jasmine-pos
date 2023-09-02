import { Box, useColorMode } from "@chakra-ui/react";

export default function NavHeaderContainer(props: any) {
  // utils
  const { colorMode } = useColorMode();

  return (
    <Box
      className="navHeaderContainer"
      bg={colorMode === "dark" ? "b" : "white"}
    >
      {props?.content}
    </Box>
  );
}
