import { darkColors, lightColors } from "../../theme/colors";
import { FrenchkissToggleTheme } from "./types";

export const light: FrenchkissToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: FrenchkissToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
