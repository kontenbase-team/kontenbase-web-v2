import { createMetaData } from "~/utils";

import type { MetaFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/releases`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Release Notes`,
    description: `Discover all the release notes for the Kontenbase.`,
  });
};

export default function Subscribe() {
  return (
    <iframe
      src="https://eqmtgkuvg-kontenbase-changelogs.builder.kontenbase.com"
      title="kontenbase-releases"
      className="releases"
    />
  );
}
