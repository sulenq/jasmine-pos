import { extendTheme } from "@chakra-ui/react";

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
    ap: {
      50: "#5A8CF0",
      100: "#5A8CF0",
      200: "#5A8CF0",
      300: "#5A8CF0",
      400: "#5A8CF0",
      500: "#5A8CF0",
      600: "#5A8CF0",
      700: "#5A8CF0",
      800: "#5A8CF0",
      900: "#5A8CF0",
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
    b: "#111111",
    bt: "#333333",
    wt: "#e8e6e3",
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

    Checkbox: {
      baseStyle: (props: any) => ({
        icon: {
          color: "white",
        },
      }),
    },
  },
});
