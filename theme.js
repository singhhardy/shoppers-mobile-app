import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF6F61",
    secondary: "#007AFF",
    background: "#F1F2F4",
    surface: "#FFFFFF",
    text: "#333333",
    onSurface: "#333333",
    border: "#E5E7EB",
  },
  elevation: {
    level0: "transparent",
    level1: "rgba(0, 0, 0, 0.05)",
    level2: "rgba(0, 0, 0, 0.1)",
  },
};

export default customTheme;
