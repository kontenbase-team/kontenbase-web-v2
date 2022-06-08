import { json } from "@remix-run/node";

import { Avatar, ButtonAnchor, ButtonGroup, ExternalLinks } from "~/components";
import { dataTeamMembers } from "~/data";
import { Layout } from "~/layouts";
import { createMetaData, getNameColor, getNameInitials } from "~/utils";

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

      <div className="stack-v gap-10">
        <article className="prose-config">
          <h2>Support</h2>
          <p>
            Thank you for being interested in Kontenbase! If you have any
            feedback, issue, or problem on learning and using Kontenbase, you
            can reach to us and the community through our main support channels:
          </p>
        </article>

        <ButtonGroup>
          <ButtonAnchor href="https://github.com/kontenbase/feedback">
            GitHub
          </ButtonAnchor>
          <ButtonAnchor href="/discord">Discord</ButtonAnchor>
          <ButtonAnchor href="/twitter">Twitter</ButtonAnchor>
        </ButtonGroup>

        <article className="prose-config">
          <h2>Team</h2>
          <p>
            Kontenbase team is a collaboration between internal developers and
            various contributors.
          </p>
        </article>

        <TeamMembers data={dataTeamMembers} />
      </div>
    </Layout>
  );
}

interface TeamMembersProps {
  data: any;
}

export const TeamMembers = ({ data }: TeamMembersProps) => {
  return (
    <div className="stack-v w-full gap-5">
      {data.map((part: any) => {
        return (
          <div key={part.type} className="stack-v w-full gap-3">
            <h4>{part.type}</h4>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {part.members.map((member: any) => {
                const nameInitials = getNameInitials(member.name);
                const nameColor = getNameColor(nameInitials);

                return (
                  <div key={member.name} className="card space-y-5">
                    <Avatar
                      // src={member.avatarUrl}
                      name={nameInitials}
                      size="xl"
                      style={{
                        backgroundColor: nameColor,
                      }}
                    />

                    <div>
                      <h4 className="">{member.name}</h4>
                      <h5>{member.role}</h5>
                    </div>

                    {member.links && (
                      <div>
                        <ExternalLinks links={member.links} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
