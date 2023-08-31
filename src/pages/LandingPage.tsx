import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

// import PwaDownloadBtn from "../components/PwaDownloadBtn";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useScreenWidth } from "../utils/utils";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // utils
  const sw = useScreenWidth();

  return (
    <VStack className="app">
      <Center maxW={"350px"} w={"100%"} h={"100vh"} px={[4, 8]}>
        <VStack w={"100%"} py={4} justify={"space-between"}>
          <Image src={"./logoTransparent.png"} w={"120px"} />
          <Text
            fontWeight={800}
            fontSize={48}
            color={"p.500"}
            lineHeight={"52px"}
            textAlign={"center"}
            py={4}
          >
            Jasmine POS
          </Text>
          <Button
            as={Link}
            w={"100%"}
            to="/signin"
            colorScheme="bnw"
            className="bnw"
            borderRadius={"full"}
          >
            SIGN IN
          </Button>

          <Button w={"100%"} borderRadius={"full"} variant={"ghost"}>
            SIGN UP
          </Button>

          <ColorModeSwitcher
            borderRadius={"full"}
            // size={"sm"}
            fontSize={14}
            position={"absolute"}
            top={"16px"}
            right={"16px"}
          />
        </VStack>
      </Center>
    </VStack>
  );
}
