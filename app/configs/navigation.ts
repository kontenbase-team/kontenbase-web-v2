import type {
  AnchorItems,
  ConfigNavigation,
  LinkItem,
  LinkItems,
} from "~/types";

/**
 * Config Navigation Links
 *
 * Used in:
 * - Multiple purpose for other navigation components
 * - Navigation Menu with Radix UI that has complex layout and positioning
 */

export const configNavigationHome: LinkItem = { to: "/", text: "Home" };

export const configNavigationPages: LinkItems = [
  { to: "/developer", text: "for Developer" },
  { to: "/pricing", text: "Pricing" },
  { to: "/blog", text: "Blog" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/subscribe", text: "Subscribe" },
];

export const configNavigationAuth: AnchorItems = [
  { href: "/signup", text: "Sign up" },
  { href: "/signin", text: "Sign in" },
];

export const configNavigationMisc: LinkItems = [
  { to: "/terms", text: "Terms & Conditions" },
  { to: "/privacy", text: "Privacy Policy" },
  { to: "/sla", text: "Service Level Agreement" },
];

export const configNavigationMiscAnchors: AnchorItems = [
  {
    href: "/releases",
    text: "Releases",
  },
];

export const configNavigationExamples: AnchorItems = [
  {
    href: "https://talk.ink",
    text: "Talk.ink",
  },
  {
    href: "https://writter.kontenbase.com",
    text: "Writter",
  },
  {
    href: "https://medeet.kontenbase.com",
    text: "Medeet",
  },
];

export const configNavigationDocs: AnchorItems = [
  {
    href: "https://docs.kontenbase.com",
    text: "Overview",
  },
  {
    href: "https://docs.kontenbase.com/overview/getting-started",
    text: "Getting Started",
  },
  {
    href: "https://docs.kontenbase.com/overview/data-types",
    text: "Data Types",
  },
  {
    href: "https://docs.kontenbase.com/overview/sdk",
    text: "SDK",
  },
];

export const configNavigationFeatures1: LinkItems = [
  { to: "/features/api-sdk", text: "Database to API" },
  { to: "/features/auth", text: "Authentication" },
];

export const configNavigationFeatures2: LinkItems = [
  { to: "/features/storage", text: "Object Storage" },
  { to: "/features/realtime", text: "Real-Time" },
];

export const configNavigationFeatures: LinkItems = [
  ...configNavigationFeatures1,
  ...configNavigationFeatures2,
];

/**
 * Config Navigation Links
 *
 * Used in the Navigation Bar with 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationBarLinks: LinkItems = [
  configNavigationHome,
  ...configNavigationPages,
  ...configNavigationFeatures1,
  ...configNavigationFeatures2,
  // In large screen, the auth links are as buttons
];

/**
 * Config Navigation Menu
 *
 * Used in:
 * - Navigation Menu Button for small screen with Headless UI
 * - Navigation Dropdown Menu for small screen with Radix UI
 */

export const configNavigationMenu: ConfigNavigation = [
  {
    name: "Pages",
    links: [configNavigationHome, ...configNavigationPages],
  },
  // In small screen, the auth links are in the Dropdown Menu or User Menu
  // {
  //   name: "Account",
  //   links: [...configNavigationAuth],
  // },
];

/**
 * Config Navigation Sitemap
 *
 * Used in the Footer with sitemap
 */

export const configNavigationSitemap: ConfigNavigation = [
  {
    name: "Pages",
    links: [configNavigationHome, ...configNavigationPages],
  },
  {
    name: "Features",
    links: [...configNavigationFeatures1, ...configNavigationFeatures2],
  },
  // {
  //   name: "Examples",
  //   anchors: [...configNavigationExamples],
  // },
  {
    name: "Docs",
    anchors: [...configNavigationDocs],
  },
  {
    name: "Misc",
    links: [...configNavigationMisc],
    anchors: [...configNavigationMiscAnchors],
  },
  {
    name: "Account",
    anchors: [...configNavigationAuth],
  },
];
