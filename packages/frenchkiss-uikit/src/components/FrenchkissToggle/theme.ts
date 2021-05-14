import { darkColors, lightColors } from "../../theme/colors";
import { FrenchKissToggleTheme } from "./types";

export const light: FrenchKissToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: FrenchKissToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
