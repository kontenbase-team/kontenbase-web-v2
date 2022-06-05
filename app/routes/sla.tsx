import { json } from "@remix-run/node";

import { OnePageBySlug } from "~/graphql";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import {
  graphcmsClient,
  markdocParse,
  markdocRenderReact,
  markdocTransform,
} from "~/libs";
import { createMetaData } from "~/utils";

import type { MetaFunction, LoaderFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/sla`, priority: 0.6 }];
  },
};

export const loader: LoaderFunction = async () => {
  const response = await graphcmsClient
    .query(OnePageBySlug, { slug: "sla" })
    .toPromise();
  const { page } = response.data;
  const content = markdocTransform(markdocParse(page.content.markdown));
  return json({ page, content });
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Service Level Agreement (SLA)`,
    description: `How we keep up our services.`,
  });
};

export default function Sla() {
  const { page, content } = useLoaderData();
  return (
    <Layout>
      <header>
        <h1>{page.title}</h1>
      </header>
      <div className="prose-config smaller max-w-screen-sm">
        {markdocRenderReact(content)}
      </div>
    </Layout>
  );
}
