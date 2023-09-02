import { ChakraProvider } from "@chakra-ui/react";
import "./global.css";
import { myTheme } from "./myTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Cashiering from "./pages/Cashiering";

export const App = () => (
  <ChakraProvider theme={myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/cashiering" element={<Cashiering />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
