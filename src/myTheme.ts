import { extendTheme } from "@chakra-ui/react";
import { transform } from "typescript";

export const myTheme = extendTheme({
  colors: {
    p: {
      50: "#f1f8ff",
      100: "#DEEDFE",
      200: "#BED9FD",
      300: "#9CC2FA",
      400: "#82ADF6",
      500: "#5A8CF0",
      600: "#416BCE",
      700: "#2D4FAC",
      800: "#1C368B",
      900: "#112473",
    },
    bnw: {
      //   50: "#f1f8ff",
      //   100: "#DEEDFE",
      200: "white",
      300: "#5A8CF0",
      //   400: "#2D4FAC",
      500: "black",
      600: "#5A8CF0",
      //   700: "#2D4FAC",
      //   800: "#1C368B",
      //   900: "#112473",
    },
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#111111" : "white",
      },
    }),
  },

  components: {
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          backdropFilter: "blur(10px)",
          transition: "200ms",
          borderRadius: "24px",
          bg: props.colorMode === "dark" ? "#18191b" : "white",
          mx: "16px",
          // border: '1px solid var(--divider)',
        },
        // overlay: {
        //   bg: props.colorMode === "dark" ? "#18191b90" : "#ffffffaa",
        // },
      }),
    },

    Menu: {
      baseStyle: (props: any) => ({
        list: {
          bg: props.colorMode === "dark" ? "#111111" : "white",
        },
        item: {
          bg: props.colorMode === "dark" ? "#111111" : "white",
        },
      }),
    },

    Button: {
      baseStyle: (props: any) => ({
        fontWeight: 700,
      }),
    },
  },
});
