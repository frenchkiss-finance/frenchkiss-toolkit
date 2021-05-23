import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  kissPriceUsd?: number;
  currentLang: string;
  links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  logout: () => void;
}
