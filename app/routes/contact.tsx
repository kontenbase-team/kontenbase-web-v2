import { json } from "@remix-run/node";

import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { LoaderFunction } from "@remix-run/node";
import type { SEOHandle, MetaFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/contact`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Contact`,
    description: `Contact Kontenbase through the social channels and team members`,
  });
};

export const loader: LoaderFunction = async () => {
  return json({});
};

export default function Contact() {
  return (
    <Layout>
      <header>
        <h1>Contact</h1>
        <h2>The social channel and team members</h2>
      </header>

      <article className="prose-config">
        <p>We are reachable in these channels:</p>
      </article>
    </Layout>
  );
}
