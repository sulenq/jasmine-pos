import { Box, Button, HStack, VStack, Text, Image } from "@chakra-ui/react";

// import PwaDownloadBtn from "../components/PwaDownloadBtn";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useScreenWidth } from "../utils/utils";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // utils
  const sw = useScreenWidth();

  return (
    <VStack className="app">
      <Box w={"100%"} px={[4, 8]}>
        <HStack w={"100%"} py={4} justify={"space-between"}>
          <HStack>
            <Image src={"./logoTransparent.png"} w={"16px"} />
            {sw >= 580 && (
              <Text fontWeight={800} fontSize={18} color={"p.500"}>
                Jasmine POS
              </Text>
            )}
          </HStack>

          <HStack>
            <ColorModeSwitcher
              borderRadius={"full"}
              size={"sm"}
              fontSize={14}
            />
            {/* {sw >= 580 && <PwaDownloadBtn styles={{ variant: "ghost" }} />} */}

            <Button borderRadius={"full"} size={"sm"} variant={"ghost"}>
              SIGN UP
            </Button>

            <Button
              as={Link}
              to="/signin"
              colorScheme="bnw"
              className="bnw"
              borderRadius={"full"}
              size={"sm"}
            >
              SIGN IN
            </Button>
          </HStack>
        </HStack>
      </Box>
    </VStack>
  );
}
