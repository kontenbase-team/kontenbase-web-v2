import { json } from "@remix-run/node";

import { Anchor } from "~/components";
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

      <div className="mt-5">
        <ButtonGroupCTA />
      </div>

      <div className="mt-10">
        <h3>FAQ</h3>
        <article className="prose-config">
          <div>
            <h4>Is it free or paid?</h4>
            <p>
              You can start to use Kontenbase for free. Then upgrade if needed
              to paid plans such as Hobby ($5) or Pro ($25).
            </p>
          </div>
          <div>
            <h4>Where is the database located, in what region?</h4>
            <p>
              Currently the data is in{" "}
              <Anchor href="https://vultr.com">Vultr</Anchor> (Singapore
              region), but we're in the process of migration to{" "}
              <Anchor href="https://idcloudhost.com/en">IdCloudHost</Anchor>{" "}
              (Singapore region).
            </p>
          </div>
          <div>
            <h4>
              Can I request for somebody who can help to implement Kontenbase
              with my team?
            </h4>
            <p>
              Yes you can. Let's have a{" "}
              <Anchor href="/demo">Personalized Demo</Anchor> or you can also
              request a meeting for{" "}
              <Anchor href="/expert">Kontenbase Tech Expert</Anchor>.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
