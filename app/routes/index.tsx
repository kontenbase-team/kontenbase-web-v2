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
    <Layout variant="full">
      <div className="stack-v mt-20 items-center gap-24">
        <HomeIntro />
        <HomePreview />

        <div className="stack-v items-center">
          <HomePowered />
          <HomePartners />
        </div>

        <HomeFeatures />
        <HomeExplainDashboard />
        {/* <HomeExplainSDK /> */}

        <HomeActionMiddle />

        <HomeExamples />
        {/* <HomeVersus /> */}

        <HomeStacks />
        {/* <SectionSocial /> */}
      </div>
    </Layout>
  );
}
