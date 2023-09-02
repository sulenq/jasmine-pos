import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Icon,
} from "@chakra-ui/react";

import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

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
          <Icon as={DarkModeTwoToneIcon} fontSize={props?.fontSize} />
        ) : (
          <Icon as={LightModeTwoToneIcon} fontSize={props?.fontSize} />
        )
      }
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
