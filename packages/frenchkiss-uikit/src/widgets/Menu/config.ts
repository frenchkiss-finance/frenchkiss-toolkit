import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.frenchkiss.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.frenchkiss.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/pools",
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://nft.frenchkiss.finance',
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.frenchkiss.finance/",
      },
      {
        label: "Tokens",
        href: "https://info.frenchkiss.finance/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.frenchkiss.finance/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.frenchkiss.finance/accounts",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.frenchkiss.finance",
      },
      {
        label: "Github",
        href: "https://github.com/frenchkiss-finance",
      },
      {
        label: "Docs",
        href: "https://docs.frenchkiss.finance",
      },
      {
        label: "Blog",
        href: "https://frenchkiss-finance.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Channel",
        href: "https://t.me/Frenchkiss_Fin",
      },
      {
        label: "Community Group",
        href: "https://t.me/joinchat/QAWhYdmB25U5YWE0",
      }
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/FrenchKiss_Fin",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
