import { Box, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import { useScreenWidth } from "../utils/utils";
import { Link } from "react-router-dom";

export default function AdminNav() {
  // types
  type Nav = { name: string; icon: any; link: string };

  // datas
  const navs = [
    { name: "Dashboard", icon: "", link: "/dashboard" },
    { name: "Products", icon: "", link: "/products" },
    { name: "Debts", icon: "", link: "/debts" },
    { name: "Expenses", icon: "", link: "/expenses" },
    { name: "Report", icon: "", link: "/report" },
  ];

  // utils
  const sw = useScreenWidth();

  if (sw < 770) {
    return (
      <HStack>
        {navs.map((nav: Nav, i) => {
          return <Box>{nav?.name}</Box>;
        })}
      </HStack>
    );
  } else {
    return (
      <VStack>
        {navs.map((nav: Nav, i) => {
          return <Box>{nav?.name}</Box>;
        })}
      </VStack>
    );
  }
}
