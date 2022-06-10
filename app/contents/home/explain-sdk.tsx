import { ButtonAnchor, CodeHighlight, IconVechai, Tabs } from "~/components";
import { dataExplainSDKCodes, dataExplainSDKLinks } from "~/data";
import { IconArrowRight } from "~/libs";

export const HomeExplainSDK = () => {
  return (
    <section className="stack-v-center layout-padding layout-content medium gap-10">
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

      <div className="w-full">
        <h3 className="mt-0 max-w-xl">Some SDK code examples</h3>
        <TabsExplainSDK tabs={dataExplainSDKCodes} />
      </div>
    </section>
  );
};

type TabExplainSDKItem = {
  label: string;
  code: string;
};

interface TabsProps {
  tabs: Array<TabExplainSDKItem>;
}

export const TabsExplainSDK = ({ tabs }: TabsProps) => {
  return (
    <Tabs.Root className="flex w-full flex-col" defaultValue="Read">
      <Tabs.List
        aria-label="Tabs Explain Dashboard"
        className="stack-h flex-wrap justify-start"
      >
        {tabs.map((tab) => {
          return (
            <Tabs.Trigger
              key={tab.label}
              value={tab.label}
              className="tabs-radix-trigger"
            >
              {tab.label}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {tabs.map((tab) => {
        return (
          <Tabs.Content
            key={tab.label}
            value={tab.label}
            tabIndex={-1}
            className="tabs-radix-content"
          >
            <div className="stack-h flex-wrap justify-start gap-5 md:flex-nowrap">
              <div className="w-full">
                <CodeHighlight code={tab.code} />
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
