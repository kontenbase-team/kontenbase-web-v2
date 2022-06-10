import { ButtonAnchor, IconVechai, Tabs } from "~/components";
import { dataExplainSDKLinks } from "~/data";
import { IconArrowRight } from "~/libs";

export const HomeExplainSDK = () => {
  return (
    <section className="stack-v-center layout-padding layout-content medium">
      <div className="stack-h flex-wrap justify-between gap-10 sm:flex-nowrap">
        <div className="max-w-sm">
          <h2 className="mt-0 max-w-2xl">
            Auto generated API and SDK to speed up development time
          </h2>
          <p>
            We turn database schema to instantly provide API and SDK. So you can
            stop building repetitive CRUD API, and focus on your product.
          </p>
        </div>

        <div className="stack-h flex-wrap gap-5">
          {dataExplainSDKLinks.map((item) => {
            return (
              <div key={item.name} className="max-w-[240px] space-y-2">
                <h4>{item.name}</h4>
                <p className="text-sm">{item.description}</p>
                <ButtonAnchor
                  href={item.url}
                  variant="light"
                  size="xs"
                  rightIcon={
                    <IconVechai
                      as={IconArrowRight}
                      label="go"
                      className="ml-1 h-4 w-4"
                    />
                  }
                >
                  Explore docs
                </ButtonAnchor>
              </div>
            );
          })}
        </div>
      </div>

      {/* <TabsExplainSDK tabs={dataExplainDashboard} /> */}
    </section>
  );
};

type TabExplainSDKItem = {
  slug: string;
  name: string;
  imageUrl: string;
  title: string;
  description: string;
  docsUrl: string;
  extraInfo: string;
  isAvailable: boolean;
};

interface TabsProps {
  tabs: Array<TabExplainSDKItem>;
}

export const TabsExplainSDK = ({ tabs }: TabsProps) => {
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
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
