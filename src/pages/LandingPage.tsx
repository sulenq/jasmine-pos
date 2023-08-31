import { Button, VStack, Text, Image, Center, Box } from "@chakra-ui/react";

// import PwaDownloadBtn from "../components/PwaDownloadBtn";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <VStack className="app">
      <Center maxW={"350px"} w={"100%"} h={"100vh"} px={[4, 8]}>
        <VStack w={"100%"} py={4} justify={"space-between"}>
          <Box
            id="landingImg"
            // border={"1px solid red"}
            w={"240px"}
            h={"240px"}
            position={"relative"}
          >
            <Image
              src={"./img/landing/logo.svg"}
              w={"140px"}
              zIndex={99}
              animation={"slow-bounce 3800ms infinite"}
              left={"50px"}
              top={"60px"}
            />

            <Image
              src={"./img/landing/review.svg"}
              w={"60px"}
              animation={"slow-bounce 3700ms infinite"}
              top={"16px"}
              left={"80px"}
            />

            <Image
              src={"./img/landing/piechart.svg"}
              animation={"slow-bounce 3700ms infinite"}
              w={"60px"}
              top={"60px"}
              left={"0px"}
            />

            <Image
              src={"./img/landing/drawer.svg"}
              animation={"slow-bounce 4200ms infinite"}
              w={"120px"}
              top={"140px"}
              left={"-10px"}
            />

            <Image
              src={"./img/landing/money1.svg"}
              animation={"slow-bounce 4000ms infinite"}
              w={"30px"}
              top={"130px"}
              left={"-5px"}
            />

            <Image
              src={"./img/landing/money2.svg"}
              animation={"slow-bounce 4100ms infinite"}
              w={"50px"}
              top={"180px"}
              left={"5px"}
            />

            <Image
              src={"./img/landing/money3.svg"}
              animation={"slow-bounce 3200ms infinite"}
              w={"80px"}
              top={"195px"}
              right={"20px"}
            />

            <Image
              src={"./img/landing/barchart.svg"}
              animation={"slow-bounce 3300ms infinite"}
              w={"80px"}
              top={"50px"}
              right={"20px"}
            />

            <Image
              src={"./img/landing/bag.svg"}
              animation={"slow-bounce 3800ms infinite"}
              w={"80px"}
              top={"100px"}
              right={"0px"}
            />
          </Box>

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
            to="/signin"
            w={"80%"}
            h={"50px"}
            mb={1}
            colorScheme="bnw"
            className="bnw btn"
            borderRadius={"full"}
          >
            SIGN IN
          </Button>

          <Button
            as={Link}
            to="/signup"
            w={"80%"}
            h={"50px"}
            borderRadius={"full"}
            variant={"ghost"}
          >
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

      <Text
        position={"absolute"}
        bottom={1}
        fontSize={14}
        color={"var(--divider2)"}
      >
        Version 1.0
      </Text>
    </VStack>
  );
}
