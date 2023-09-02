import {
  Center,
  HStack,
  Icon,
  Tooltip,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useScreenWidth } from "../utils/utils";

import PointOfSaleTwoToneIcon from "@mui/icons-material/PointOfSaleTwoTone";
import ReceiptLongTwoToneIcon from "@mui/icons-material/ReceiptLongTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { Link, useLocation } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function CashierNav() {
  // types
  type Nav = {
    name: string;
    icon: any;
    link: string;
  };

  // datas
  const navs = [
    {
      name: "Cashiering",
      icon: PointOfSaleTwoToneIcon,
      link: "/cashiering",
    },
    {
      name: "Transactions",
      icon: ReceiptLongTwoToneIcon,
      link: "/cashier-transactions",
    },
    {
      name: "Profile",
      icon: PersonOutlineTwoToneIcon,
      link: "/cashier-profile",
    },
  ];

  // utils
  const sw = useScreenWidth();
  const { colorMode } = useColorMode();
  const location = useLocation();

  if (sw < 770) {
    return (
      <HStack
        w={"100%"}
        justify={"center"}
        p={4}
        position={"fixed"}
        left={0}
        bottom={2}
      >
        <HStack
          bg={colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"}
          //   border={"1px solid var(--divider)"}
          gap={2}
          p={"6px"}
          borderRadius={"full"}
        >
          {navs.map((nav: Nav, i) => {
            return (
              <Tooltip label={nav?.name}>
                <Center
                  as={Link}
                  to={nav?.link}
                  key={i}
                  p={2}
                  _hover={{
                    bg: "var(--divider)",
                  }}
                  borderRadius={"full"}
                >
                  <Icon
                    as={nav?.icon}
                    color={
                      location.pathname === nav?.link
                        ? "p.500"
                        : colorMode === "dark"
                        ? "white"
                        : "black"
                    }
                    fontSize={20}
                  />
                </Center>
              </Tooltip>
            );
          })}
          <ColorModeSwitcher
            size={"sm"}
            ml={0}
            borderRadius={"full"}
            _hover={{
              bg: "var(--divider)",
            }}
            fontSize={20}
            w={"36px"}
            h={"36px"}
          />
        </HStack>
      </HStack>
    );
  } else {
    return (
      <VStack h={"100vh"} justify={"center"} p={4}>
        <VStack
          bg={colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"}
          //   border={"1px solid var(--divider)"}
          gap={2}
          p={"6px"}
          borderRadius={"full"}
        >
          {navs.map((nav: Nav, i) => {
            return (
              <Center
                as={Link}
                to={nav?.link}
                key={i}
                p={2}
                _hover={{
                  bg: "var(--divider)",
                }}
                borderRadius={"full"}
              >
                <Icon
                  as={nav?.icon}
                  color={
                    location.pathname === nav?.link
                      ? "p.500"
                      : colorMode === "dark"
                      ? "w"
                      : "bt"
                  }
                  fontSize={20}
                />
              </Center>
            );
          })}
          <ColorModeSwitcher
            size={"sm"}
            ml={0}
            color={colorMode === "dark" ? "w" : "bt"}
            borderRadius={"full"}
            _hover={{
              bg: "var(--divider)",
            }}
            fontSize={20}
            w={"36px"}
            h={"36px"}
          />
        </VStack>
      </VStack>
    );
  }
}
