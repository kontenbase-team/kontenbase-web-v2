import { HomeStacks } from "~/contents";
import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return null;
  },
};

export default function Debug() {
  return (
    <Layout variant="full">
      <div className="stack-v mt-20 items-center gap-20">
        <HomeStacks />
      </div>
    </Layout>
  );
}
