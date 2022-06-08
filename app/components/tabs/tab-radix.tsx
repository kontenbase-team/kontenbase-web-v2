import * as Tabs from "@radix-ui/react-tabs";

import { dataExplainDashboard } from "~/data";

export { Tabs };

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

export const TabsExample = ({ tabs = dataExplainDashboard }: TabsProps) => {
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
            <div className="stack-h justify-start gap-5">
              <div className="w-full max-w-md space-y-3">
                <h3 className="m-0">{tab.title}</h3>
                <p>{tab.description}</p>
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
