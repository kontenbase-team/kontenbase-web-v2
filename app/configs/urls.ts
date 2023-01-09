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
    slug: "microgen",
    name: "Microgen",
    url: "https://microgen.id",
    isEnabled: true,
  },
  {
    slug: "github",
    name: "GitHub",
    url: "https://github.com/kontenbase",
    isEnabled: true,
  },
  {
    slug: "twitter",
    name: "Twitter",
    url: "https://twitter.com/kontenbase",
    isEnabled: true,
  },
  {
    slug: "youtube",
    name: "YouTube",
    url: "https://youtube.com/channel/UCmOBswBENyNAP10eZ_xCHSQ",
    isEnabled: true,
  },
  {
    slug: "discord",
    name: "Discord",
    url: "https://discord.gg/2YJGYc99Gp",
    isEnabled: true,
  },
  {
    slug: "producthunt",
    name: "Product Hunt",
    url: "https://producthunt.com/posts/kontenbase-alpha",
    isEnabled: true,
  },
];
