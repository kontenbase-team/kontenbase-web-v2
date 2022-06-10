import { json } from "@remix-run/node";

import { ButtonAnchor, ButtonGroup } from "~/components";
import { TeamMembers } from "~/contents";
import { dataTeamMembers } from "~/data";
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
    <Layout variant="medium">
      <header>
        <h1>Contact</h1>
        <p>Support links, social channel, and team members</p>
      </header>

      <article className="stack-v layout-content small gap-5">
        <h2>Support</h2>
        <p>
          Thank you for being interested in Kontenbase! If you have any
          feedback, issue, or problem on learning and using Kontenbase, you can
          reach to us and the community through our main support channels:
        </p>
        <ButtonGroup>
          <ButtonAnchor href="https://github.com/kontenbase/feedback">
            GitHub
          </ButtonAnchor>
          <ButtonAnchor href="/discord">Discord</ButtonAnchor>
          <ButtonAnchor href="/twitter">Twitter</ButtonAnchor>
          <ButtonAnchor href="/demo">Schedule Demo</ButtonAnchor>
          <ButtonAnchor href="/expert">Contact Tech Expert</ButtonAnchor>
        </ButtonGroup>
      </article>

      <article className="stack-v layout-content small mt-10 mb-5">
        <h2>Team</h2>
        <p>
          Kontenbase team is a collaboration between internal developers and
          various contributors.
        </p>
      </article>

      <TeamMembers data={dataTeamMembers} />
    </Layout>
  );
}
