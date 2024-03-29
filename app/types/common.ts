import type { dayjs } from "~/libs";

/**
 * Common Types
 *
 * Used in:
 * - Config
 * - Data
 * - LoaderData
 * - ActionData
 */

export type DateTime = string | number | Date | null | undefined | dayjs.Dayjs;

export type Locale = string | "en" | "fr";

export type CurrencyCode = "EUR" | "IDR" | "MYR" | "PHP" | "SGD" | "USD";

export type Currency = {
  code: CurrencyCode;
  name: string;
  symbol: string;
};

export type TextItem = {
  text: string;
};

export type LinkItem = {
  to: string;
  text: string;
  isEnabled?: boolean;
};

export type AnchorItem = {
  href: string;
  text: string;
  isEnabled?: boolean;
};

export type ExternalLinkItem = {
  slug: string;
  name: string;
  url: string;
  isEnabled?: boolean;
};

export type StackItem = {
  name: string;
  url: string;
  description?: string;
};

export type StackItems = Array<
  StackItem & {
    subItems?: Array<StackItem>;
  }
>;

export type Asset = {
  id: string;
  url: string;
};

export type RichText = {
  html?: string;
  markdown?: string;
  raw?: string;
  text?: string;
};

export type Article = {
  id: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  content?: RichText;
  coverImage?: Asset;
};

export type Strings = Array<string>;
export type Numbers = Array<number>;
export type Booleans = Array<boolean>;
export type Currencies = Array<Currency>;
export type TextItems = Array<TextItem>;
export type LinkItems = Array<LinkItem>;
export type AnchorItems = Array<AnchorItem>;
export type ExternalLinkItems = Array<ExternalLinkItem>;
export type Articles = Array<Article>;
