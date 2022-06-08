import {
  HomeActionMiddle,
  HomeExamples,
  HomeExplainDashboard,
  HomeFeatures,
  HomeIntro,
  HomePartners,
  HomePowered,
  HomePreview,
  HomeStacks,
  HomeVersus,
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
      <div className="stack-v mt-20 items-center gap-16 sm:gap-28">
        <HomeIntro />
        <HomePreview />

        <div className="stack-v layout-padding items-center">
          <HomePowered />
          <HomePartners />
        </div>

        <HomeFeatures />
        <HomeExplainDashboard />
        {/* <HomeExplainSDK /> */}

        <HomeActionMiddle />

        <HomeExamples />
        <HomeVersus />

        <HomeStacks />
        {/* <SectionSocial /> */}
      </div>
    </Layout>
  );
}
