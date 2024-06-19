import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <FaMoon /> : <FaSun />;

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={icon}
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      {...props}
    />
  );
};

export default ColorModeSwitcher;