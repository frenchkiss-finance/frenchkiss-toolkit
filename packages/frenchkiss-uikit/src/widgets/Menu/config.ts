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
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
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
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
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
        label: "English",
        href: "https://t.me/frenchkissfinance",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/FrenchkissFinanceIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/FrenchkissFinance_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/FrenchkissFinanceVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/FrenchkissFinance_ITA",
      },
      {
        label: "русский",
        href: "https://t.me/FrenchkissFinance_RU",
      },
      {
        label: "Türkiye",
        href: "https://t.me/FrenchkissFinance_Turkiye",
      },
      {
        label: "Português",
        href: "https://t.me/FrenchkissFinance_Portuguese",
      },
      {
        label: "Español",
        href: "https://t.me/FrenchkissFinance_ES",
      },
      {
        label: "日本語",
        href: "https://t.me/FrenchkissFinance_JP",
      },
      {
        label: "Français",
        href: "https://t.me/FrenchkissFinance_FR",
      },
      {
        label: "Announcements",
        href: "https://t.me/FrenchkissFinanceAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/FrenchkissFinanceWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/FrenchkissFinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
