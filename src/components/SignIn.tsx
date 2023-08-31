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
import { Link } from "react-router-dom";

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

  return (
    <Center h={sw >= 770 ? "100vh" : ""} position={"relative"}>
      <Box className="navHeaderContainer">
        <HStack className="navHeader">
          <IconButton
            as={Link}
            to="/"
            aria-label="backBtn"
            icon={<Icon as={ArrowBackIcon} />}
            borderRadius={"full"}
            variant={"ghost"}
          />

          <Text className="navHeaderLabel" fontSize={24}>
            Signing In
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
            className="btn bnw"
            w={"100%"}
            colorScheme="bnw"
            borderRadius={"full"}
            my={4}
          >
            SIGN IN
          </Button>
        </Box>
      </SimpleGrid>
    </Center>
  );
}
