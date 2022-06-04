import {
  ExampleAlerts,
  ExampleButtons,
  ExampleForms,
  ExampleNotifications,
  ExampleToasts,
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
    <Layout>
      <article className="divide space-y-20 divide-y-2 divide-primary-100 dark:divide-primary-900">
        <HomeIntro />
        <ExampleButtons />
        <ExampleForms />
        <ExampleAlerts />
        <ExampleToasts />
        <ExampleNotifications />
      </article>
    </Layout>
  );
}
