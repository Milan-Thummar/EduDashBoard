const colors = {
  transparent: "transparent",
  current: "currentColor",
  inherit: "inherit",
  white: "#FFFFFF",
  black: "#000000",

  // Blue
  primary: {
    50: "#e9effd",
    100: "#bbcff9",
    200: "#9bb7f6",
    300: "#6d96f2",
    400: "#5182ef",
    500: "#2563eb",
    600: "#225ad6",
    700: "#1a46a7",
    800: "#143681",
    900: "#102a63",
    DEFAULT: "#2563eb",
  },

  // Slate
  slate: {
    50: "#e7e8ea",
    100: "#b5b7bd",
    200: "#91949d",
    300: "#5e6470",
    400: "#3f4555",
    500: "#0f172a",
    600: "#0e1526",
    700: "#0b101e",
    800: "#080d17",
    900: "#060a12",
    DEFAULT: "#0f172a",
  },

  // Status
  success: {
    DEFAULT: "#059669",
  },
  warning: {
    DEFAULT: "#d97706",
  },
} as const;

export default colors;
