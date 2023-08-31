import { ChakraProvider } from "@chakra-ui/react";
import "./global.css";
import { myTheme } from "./myTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export const App = () => (
  <ChakraProvider theme={myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
