import { json } from "@remix-run/node";

import { ButtonGroupCTA } from "~/contents";
import { dataFeaturesSimple } from "~/data";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { LoaderFunction } from "@remix-run/node";
import type { SEOHandle, MetaFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/about`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `About`,
    description: `No code backend API, fast and easy! Easily create REST API, auth, and storage in less than 1 minute without coding.`,
  });
};

export const loader: LoaderFunction = async () => {
  return json({
    features: dataFeaturesSimple,
  });
};

export default function About() {
  return (
    <Layout>
      <header>
        <h1>About</h1>
        <h2>Why and what is a no code backend API</h2>
      </header>

      <article className="prose-config">
        <p>
          Are you a frontend-only-focused developer but in a need of a simple
          REST API backend?
        </p>
        <p>
          Or maybe you had an experience in building your own backend, but
          currently you just want to have your work done?
        </p>
        <p>Kontenbase solve those problems!</p>
      </article>

      <ButtonGroupCTA />
    </Layout>
  );
}
