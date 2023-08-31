import { Box, HStack } from "@chakra-ui/react";

export default function Nav() {
  const navs = [
    { name: "Dashboard", icon: "" },
    { name: "Products", icon: "" },
    { name: "Debts", icon: "" },
    { name: "Expenses", icon: "" },
    { name: "Report", icon: "" },
  ];

  type Nav = { name: string; icon: any };

  return (
    <HStack>
      {navs.map((nav: Nav, i) => {
        return <Box>{nav?.name}</Box>;
      })}
    </HStack>
  );
}
