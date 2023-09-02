import { useState } from "react";

import {
  Image,
  Button,
  HStack,
  Text,
  Input,
  Box,
  SimpleGrid,
  Center,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useScreenWidth } from "../utils/utils";

export default function SignUp() {
  //types
  type SignupData = {
    shopName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  // datas
  const [signupData, setSignupData] = useState<SignupData>({
    shopName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   utils
  const sw = useScreenWidth();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((ps) => ({
      ...ps,
      [name]: value,
    }));
  };

  return (
    <Center h={sw >= 770 ? "100vh" : ""} position={"relative"}>
      <Box className="navHeaderContainer">
        <HStack className="navHeader">
          <IconButton
            onClick={() => {
              window.history.back();
            }}
            aria-label="backBtn"
            icon={<Icon as={ArrowBackIcon} />}
            borderRadius={"full"}
            variant={"ghost"}
          />

          <Text className="navHeaderLabel" fontSize={24}>
            Signing Up
          </Text>
        </HStack>
      </Box>

      <SimpleGrid
        mt={16}
        columns={[1, 1, 2]}
        gap={[4, 4, 8]}
        maxW={"1000px"}
        mx={"auto"}
        p={[6, 8]}
      >
        <Image
          id="adminImg"
          src="./img/signup.png"
          animation={"role 1s"}
          transition={"0.3s"}
        />

        <Box mt={2} w={"100%"}>
          <Text fontWeight={600}>Shop Name</Text>

          <Input
            mb={4}
            className="input"
            placeholder="Kios Melati"
            name="shopName"
            onChange={handleInputChange}
            value={signupData?.shopName}
          />

          <Text fontWeight={600}>E-mail</Text>

          <Input
            mb={4}
            className="input"
            placeholder="sulenq@email.com"
            name="email"
            onChange={handleInputChange}
            value={signupData?.email}
          />

          <Text fontWeight={600}>Password</Text>

          <Input
            mb={4}
            type="password"
            className="input"
            placeholder="type your password"
            name="password"
            onChange={handleInputChange}
            value={signupData?.password}
          />

          <Text fontWeight={600}>Confirm Password</Text>

          <Input
            mb={4}
            type="password"
            className="input"
            placeholder="type your password"
            name="confirmPassword"
            onChange={handleInputChange}
            value={signupData?.confirmPassword}
          />

          <Button
            className="btn bnw"
            w={"100%"}
            colorScheme="bnw"
            borderRadius={"full"}
            my={4}
          >
            SIGN UP
          </Button>
        </Box>
      </SimpleGrid>
    </Center>
  );
}
