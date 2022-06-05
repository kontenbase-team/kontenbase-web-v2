import type { ExternalLinkItems } from "~/types";

/**
 * Config External Anchor URLs
 *
 * The intention is so have this URL format:
 * https://oursite.com/name
 * to make it easier to type, then redirect instead of accessing directly
 *
 * The `url` can be:
 * https://redirect.com/slug
 * https://theirsite.com/username
 */

export const configExternalLinks: ExternalLinkItems = [
  {
    slug: "github",
    name: "GitHub",
    url: "https://a.kontenbase.com/github",
    isEnabled: true,
  },
  {
    slug: "twitter",
    name: "Twitter",
    url: "https://a.kontenbase.com/twitter",
    isEnabled: true,
  },
  {
    slug: "youtube",
    name: "YouTube",
    url: "https://a.kontenbase.com/youtube",
    isEnabled: true,
  },
  {
    slug: "discord",
    name: "Discord",
    url: "https://a.kontenbase.com/discord",
    isEnabled: true,
  },
  {
    slug: "producthunt",
    name: "Product Hunt",
    url: "https://a.kontenbase.com/producthunt",
    isEnabled: true,
  },
];
