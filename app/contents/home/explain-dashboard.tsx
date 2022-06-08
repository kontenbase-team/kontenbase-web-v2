import { Tabs, VideoYouTube } from "~/components";
import { dataExplainDashboard } from "~/data";

export const HomeExplainDashboard = () => {
  return (
    <section className="stack-v-center layout-padding layout-content medium py-20">
      <h1 className="max-w-2xl text-center">
        Easy to use Dashboard &amp; Instant API Creation
      </h1>

      <TabsExplainDashboard tabs={dataExplainDashboard} />
    </section>
  );
};

type TabExplainDashboardItem = {
  slug: string;
  name: string;
  imageUrl: string;
  youtubeEmbedId?: string;
  title: string;
  description: string;
  docsUrl: string;
  extraInfo: string;
  isAvailable: boolean;
};

interface TabsProps {
  tabs: Array<TabExplainDashboardItem>;
}

export const TabsExplainDashboard = ({ tabs }: TabsProps) => {
  return (
    <Tabs.Root
      className="flex w-full flex-col"
      defaultValue="explain-dashboard-rest-api"
    >
      <Tabs.List
        aria-label="Tabs Explain Dashboard"
        className="stack-h flex-wrap justify-start"
      >
        {tabs.map((tab) => {
          return (
            <Tabs.Trigger
              key={tab.slug}
              value={tab.slug}
              className="tabs-radix-trigger"
            >
              {tab.name}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {tabs.map((tab) => {
        return (
          <Tabs.Content
            key={tab.slug}
            value={tab.slug}
            tabIndex={-1}
            className="tabs-radix-content"
          >
            <div className="stack-h flex-wrap justify-start gap-5 md:flex-nowrap">
              <div className="w-full max-w-md space-y-3">
                <h3 className="m-0">{tab.title}</h3>
                <p>{tab.description}</p>
                {tab.extraInfo && (
                  <p className="bg-tertiary rounded-base p-5 text-sm">
                    {tab.extraInfo}
                  </p>
                )}
              </div>
              {tab.youtubeEmbedId && (
                <div className="w-full">
                  <VideoYouTube
                    title={tab.title}
                    embedId={tab.youtubeEmbedId}
                  />
                </div>
              )}
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
