import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Icon,
} from "@chakra-ui/react";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const { colorMode } = useColorMode();

  return (
    <IconButton
      size="md"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={
        colorMode === "dark" ? (
          <Icon as={DarkModeOutlinedIcon} fontSize={props?.fontSize} />
        ) : (
          <Icon as={LightModeOutlinedIcon} fontSize={props?.fontSize} />
        )
      }
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
