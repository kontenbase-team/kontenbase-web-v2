import {
  FooterBanner,
  HighlightedFeatures,
  HomeIdeas,
  HomeIntro,
} from "~/contents";
import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }];
  },
};

export default function Index() {
  return (
    <Layout id="route-index" variant="full">
      <HomeIntro />
      <HomeIdeas />

      <HighlightedFeatures />

      <FooterBanner />
    </Layout>
  );
}
