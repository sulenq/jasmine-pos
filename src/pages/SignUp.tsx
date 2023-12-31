import * as yup from "yup";

import {
  Image,
  Button,
  HStack,
  Text,
  Input,
  Box,
  SimpleGrid,
  IconButton,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useScreenWidth } from "../utils/utils";
import NavHeaderContainer from "../components/NavHeaderContainer";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function SignUp() {
  // types

  // datas
  const signupForm = [
    {
      name: "storeName",
      type: "text",
      label: "Store's Name",
      placeholder: "Jasmine Kiosk",
      hint: "",
    },
    {
      name: "adminUsername",
      type: "text",
      label: "Admin Username",
      placeholder: "sulenq",
      hint: "Username can be used to Sign In",
    },
    {
      name: "email",
      type: "text",
      label: "E-mail",
      placeholder: "sulenq@email.co.id",
      hint: "E-mail is used for verification and can be used to Sign In",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Type a strong password",
      hint: "",
    },
  ];

  //   utils
  const sw = useScreenWidth();

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      storeName: "",
      adminUsername: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log("signing up store...");
      console.log(JSON.stringify(values, null, 2));
    },

    validationSchema: yup.object().shape({
      storeName: yup.string().required("Store's Name is required"),
      adminUsername: yup.string().required("Admin Username is required"),
      email: yup
        .string()
        .required("E-mail is required")
        .email("Input a valid e-mail format"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });

  const handleForm = (event: any) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  // function isValidEmail(email: string) {
  //   const emailRegex =
  //     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   return emailRegex.test(email);
  // }

  return (
    <VStack h={sw >= 770 ? "100vh" : ""} position={"relative"} className="app">
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

            <Text className="navHeaderLabel">Signing Up</Text>
          </HStack>
        }
      />

      <VStack h={"100%"} justify={"center"} mt={20}>
        <Text
          fontWeight={800}
          fontSize={[32, 42, 48]}
          textAlign={"center"}
          px={8}
          mt={[4, null, 0]}
          lineHeight={1.1}
          color={"p.500"}
        >
          Let's Register Your Store!
        </Text>

        <SimpleGrid
          columns={[1, 1, 2]}
          gap={[4, 4, 8]}
          // maxW={"1080px"}
          mx={"auto"}
          p={[6, 8]}
        >
          <Image
            id="adminImg"
            src="./img/signup.png"
            animation={"role 1s"}
            transition={"0.3s"}
            mb={[4, null, 0]}
          />

          <Box w={"100%"}>
            <form onSubmit={formik.handleSubmit}>
              {signupForm.map((s, i) => {
                // @ts-ignore
                const valid = formik.errors[s?.name];
                return (
                  <FormControl mb={4} key={i} isInvalid={valid !== undefined}>
                    <FormLabel fontWeight={600}>{s?.label}</FormLabel>

                    <Input
                      className="input"
                      name={s?.name}
                      type={s?.type}
                      placeholder={s?.placeholder}
                      onChange={handleForm}
                    />

                    <FormHelperText opacity={0.5}>{s?.hint}</FormHelperText>

                    <FormErrorMessage mt={1} color="red.400" fontSize={14}>
                      {valid}
                    </FormErrorMessage>
                  </FormControl>
                );
              })}

              <SimpleGrid my={4} columns={[1, null, 2]}>
                <Checkbox colorScheme="ap">
                  <Text fontSize={14}>Agree to our privacy and policy</Text>
                </Checkbox>

                <Text
                  as={Link}
                  color={"p.500"}
                  mt={[2, null, 0]}
                  textAlign={["left", null, "right"]}
                >
                  See privacy and policy
                </Text>
              </SimpleGrid>

              <Button
                className="btn bnw"
                type="submit"
                w={"100%"}
                colorScheme="bnw"
                borderRadius={"full"}
                my={4}
              >
                SIGN UP
              </Button>
            </form>
          </Box>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
