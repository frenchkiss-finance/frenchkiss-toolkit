import "styled-components";
import { FrenchkissTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends FrenchkissTheme {}
}
