import "styled-components";
import { FrenchKissTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends FrenchKissTheme {}
}
