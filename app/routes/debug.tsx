import { TabsExample } from "~/components";
import { dataExplainDashboard } from "~/data";
import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return null;
  },
};

export default function Debug() {
  return (
    <Layout variant="medium">
      <div className="stack-v mt-20 items-center gap-20">
        <TabsExample tabs={dataExplainDashboard} />
      </div>
    </Layout>
  );
}
