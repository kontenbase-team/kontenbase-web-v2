import { useEffect, useState } from "react";

import { Image, Tabs } from "~/components";
import { dataIdeaSample } from "~/data";

export const HomeIdeas = () => {
  return (
    <section className="stack-v-center layout-padding mb-20">
      <div className="mb-6 text-center">
        <h1 className="mb-4">
          <span className="highlighted-word">Create</span> anything,{" "}
          <span className="highlighted-word">solve</span> anything
        </h1>
        <p className="text-xl">Explore industry workflows study cases</p>
      </div>

      <TabsIdea tabs={dataIdeaSample} />
    </section>
  );
};

type IdeaItem = {
  color: string;
  description: string;
  icon: string;
  image: string;
  name: string;
  slug: string;
  title: string;
};

interface TabsProps {
  tabs: Array<IdeaItem>;
}

export const TabsIdea = ({ tabs }: TabsProps) => {
  const [selectedIdeaIndex, setSelectedIdeaIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSelectedIdeaIndex((prev) => {
        if (prev === tabs.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
  }, [tabs.length]);

  return (
    <Tabs.Root
      className="flex w-full flex-col"
      value={tabs[selectedIdeaIndex].slug}
    >
      <Tabs.List
        aria-label="Tabs Explain Dashboard"
        className="stack-h flex-wrap justify-between md:justify-center"
      >
        {tabs.map((tab, index) => {
          return (
            <Tabs.Trigger
              key={tab.slug}
              value={tab.slug}
              className="tabs-radix-trigger mb-4 lg:mb-0"
              onClick={() => setSelectedIdeaIndex(index)}
            >
              {tab.title}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {tabs.map((tab) => {
        return (
          <Tabs.Content
            key={tab.slug}
            value={tab.slug}
            tabIndex={0}
            className="lg:mt-8 lg:px-24"
          >
            <div className="stack-v flex-wrap justify-center gap-8 md:flex-nowrap lg:flex-row-reverse">
              <div className="grow-1 space-y-3">
                <div className="max-w-lg">
                  <div className="mb-2 h-[40px] w-10">
                    <Image src={tab.icon} alt={tab.name} />
                  </div>
                  <h2 className="m-0 mb-1 text-3xl font-bold">{tab.name}</h2>
                  <p>{tab.description}</p>
                </div>
              </div>
              <div className="h-[164] xs:h-[220px] sm:h-[336px] md:h-[388px] lg:h-[225px] xl:h-[287px] 2xl:h-[316px] 3xl:h-[335px]">
                <Image
                  src={tab.image}
                  alt={tab.name}
                  className="w-full rounded-base bg-primary-500 object-contain"
                />
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
