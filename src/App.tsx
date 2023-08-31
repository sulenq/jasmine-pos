import { ChakraProvider } from "@chakra-ui/react";
import "./global.css";
import { myTheme } from "./myTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/SignIn";

export const App = () => (
  <ChakraProvider theme={myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
