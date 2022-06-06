import {
  HomeActionMiddle,
  HomeFeatures,
  HomeIntro,
  HomePartners,
  HomePowered,
  HomePreview,
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
      <div className="stack-v mt-20 items-center gap-20">
        <HomeIntro />
        <HomePreview />
        <div className="stack-v items-center">
          <HomePowered />
          <HomePartners />
        </div>
        <HomeFeatures />
        {/* <HomeDashboardAPI /> */}
        <HomeActionMiddle />
        {/* <HomeExamples /> */}
        {/* <HomeVersus /> */}
        {/* <HomeActionLast /> */}
        {/* <SocialSection /> */}
      </div>
    </Layout>
  );
}
