import { Icon, ButtonAnchor } from "~/components";

import type { FunctionComponent } from "react";

interface FeatureCodeExamplesProps {
  feature: any;
}

export const FeatureCodeExamples: FunctionComponent<
  FeatureCodeExamplesProps
> = ({ feature }) => {
  return (
    <div
    // style={(theme) => {
    //   return {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     gap: "3rem",
    //     padding: `5rem ${theme.spacing.lg}px`,
    //   };
    // }}
    >
      <div style={{ width: "100%", flexWrap: "wrap", gap: "3rem" }}>
        <div style={{ width: "100%", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "42ch" }}>
            <h2>{feature.subTitle}</h2>
            <p>{feature.subDescription}</p>
            <ButtonAnchor
              href={feature.docsUrl}
              variant="light"
              rightIcon={<Icon name="arrow-right" />}
            >
              Read Docs
            </ButtonAnchor>
          </div>
        </div>

        {/* <Tabs style={{ width: "100%", minHeight: 330 }}>
          {feature.codeExamples.map((item: any) => {
            return (
              <Tabs.Tab key={item.label} label={item.label}>
                <CodeHighlight
                  colorScheme="dark"
                  language="typescript"
                  scrollAreaComponent="div"
                  withLineNumbers
                  copyLabel="Copy code"
                  copiedLabel="Copied!"
                  style={{ pre: { borderRadius: 0, marginTop: 0 } }}
                >
                  {explainAPICodeImport + item.code}
                </CodeHighlight>
              </Tabs.Tab>
            );
          })}
        </Tabs> */}
      </div>
    </div>
  );
};
