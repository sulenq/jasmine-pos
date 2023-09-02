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
  Checkbox,
} from "@chakra-ui/react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useScreenWidth } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import NavHeaderContainer from "../components/NavHeaderContainer";

export default function SignIn() {
  //types
  type Role = "admin" | "cashier";
  type SigninData = { username: string; password: string };

  // datas
  const [role, setRole] = useState<Role>("admin");
  const [signinData, setSigninData] = useState<SigninData>({
    username: "",
    password: "",
  });

  //   utils
  const sw = useScreenWidth();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninData((ps) => ({
      ...ps,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSignin = () => {
    if (role === "admin") {
      console.log("signing in admin...");
      navigate("/admin-dashboard");
    } else if (role === "cashier") {
      console.log("signing in cashier...");
      navigate("/cashiering");
    }
  };

  return (
    <Center h={sw >= 770 ? "100vh" : ""} position={"relative"}>
      <NavHeaderContainer
        content={
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
              Signing In
            </Text>
          </HStack>
        }
      />

      <SimpleGrid
        mt={16}
        columns={[1, 1, 2]}
        gap={[4, 4, 8]}
        maxW={"1000px"}
        mx={"auto"}
        p={[6, 8]}
      >
        <HStack>
          <Image
            id="adminImg"
            src="./img/admin.png"
            animation={"role 1s"}
            transition={"0.3s"}
            display={role === "admin" ? "block" : "none"}
          />

          <Image
            id="cashierImg"
            src="./img/cashier.png"
            transition={"0.3s"}
            animation={"role 1s"}
            display={role === "cashier" ? "block" : "none"}
          />
        </HStack>

        <Box mt={2} w={"100%"}>
          <Text fontWeight={600}>Role</Text>
          <HStack
            mb={4}
            gap={1}
            p={1}
            w={"100%"}
            borderRadius={8}
            border={"1px solid var(--divider2)"}
            position={"relative"}
          >
            <HStack
              id="adminRole"
              transition={"0.3s"}
              onClick={() => {
                setRole("admin");
              }}
              w={"50%"}
              justify={"center"}
              borderRadius={6}
              p={1}
              fontWeight={800}
              cursor={"pointer"}
              color={role === "admin" ? "white" : ""}
              bg={role === "admin" ? "p.500" : ""}
            >
              <Text fontSize={14}>ADMIN</Text>
            </HStack>

            <HStack
              id="cashierRole"
              transition={"0.3s"}
              onClick={() => {
                setRole("cashier");
              }}
              w={"50%"}
              justify={"center"}
              borderRadius={6}
              p={1}
              fontWeight={800}
              cursor={"pointer"}
              color={role === "cashier" ? "white" : ""}
              bg={role === "cashier" ? "p.500" : ""}
            >
              <Text fontSize={14}>CASHIER</Text>
            </HStack>
          </HStack>
          <Text fontWeight={600}>Username/E-mail</Text>
          <Input
            mb={4}
            className="input"
            placeholder="sulenq or sulenq@email.com"
            name="username"
            onChange={handleInputChange}
            value={signinData?.username}
          />
          <Text fontWeight={600}>Password</Text>
          <Input
            mb={4}
            type="password"
            className="input"
            placeholder="type your password"
            name="password"
            onChange={handleInputChange}
            value={signinData?.password}
          />
          <HStack justify={"space-between"} my={2}>
            <Checkbox colorScheme="ap">
              <Text fontSize={14}>Remember Me</Text>
            </Checkbox>
            <Link to="">
              <Text fontSize={14} color={"p.500"}>
                Forgot password?
              </Text>
            </Link>
          </HStack>
          <Button
            onClick={handleSignin}
            className="btn bnw"
            w={"100%"}
            colorScheme="bnw"
            borderRadius={"full"}
            my={4}
          >
            SIGN IN
          </Button>
          <HStack fontSize={14} gap={1}>
            <Text>Do not have an account?</Text>
            <Link to="/signup">
              <Text color={"p.500"}>sign up here</Text>
            </Link>
          </HStack>
        </Box>
      </SimpleGrid>
    </Center>
  );
}
