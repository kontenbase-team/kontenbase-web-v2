import { HomeIntro, HomePreview } from "~/contents";
import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }];
  },
};

export default function Index() {
  return (
    <Layout variant="full">
      <div className="stack-v mt-20 items-center gap-20">
        <HomeIntro />
        <HomePreview />
        {/* <HomePowered />
        <HomePartners />
        <HomeFeatures />
        <HomeDashboardAPI />
        <HomeActionMiddle />
        <HomeExamples />
        <HomeVersus />
        <HomeActionLast />
        <SocialSection /> */}
      </div>
    </Layout>
  );
}
