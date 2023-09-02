import {
  Button,
  VStack,
  Text,
  Image,
  Center,
  Box,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

// import PwaDownloadBtn from "../components/PwaDownloadBtn";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <VStack className="app">
      <ColorModeSwitcher
        borderRadius={"full"}
        // size={"sm"}
        fontSize={20}
        position={"absolute"}
        top={"8px"}
        right={"8px"}
      />

      <HStack p={4}>
        <Image src="./logoTransparent.png" w={"18px"} />
        <Text fontSize={20} color={"p.500"} fontWeight={800}>
          Jasmine POS
        </Text>
      </HStack>

      <Center w={"100%"} h={"calc(100vh - 70px)"} px={[4, 8]}>
        <SimpleGrid w={"100%"} py={4} columns={[1, null, 2]} gap={8}>
          <Center>
            <Box
              id="landingImg"
              ml={4}
              transform={["scale(1)", "scale(1.2)", "scale(1.5)"]}
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
          </Center>

          <Box p={4}>
            <Text
              fontSize={[32, 42, 48]}
              fontWeight={700}
              lineHeight={1.1}
              mb={8}
              textAlign={["center", null, "left"]}
            >
              Responsive, powerful system to{" "}
              <span style={{ color: "var(--p500)" }}>grow your bussiness</span>
            </Text>

            <Stack align={"center"} direction={["column", null, "row"]}>
              <Button
                as={Link}
                to="/signin"
                w={"180px"}
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
                w={"180px"}
                h={"50px"}
                borderRadius={"full"}
                variant={"ghost"}
              >
                SIGN UP
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
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
