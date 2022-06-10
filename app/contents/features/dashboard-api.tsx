import { Icon, ButtonAnchor } from "~/components";
import { dataExplainSDKLinks } from "~/data";

import type { FunctionComponent } from "react";

export const HomeDashboardAPI: FunctionComponent = () => {
  return (
    <div
    // style={(theme) => ({
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   gap: '3rem',
    //   padding: `5rem ${theme.spacing.lg}px`,
    // })}
    >
      <div className="stack-v" style={{ gap: "5rem", width: "100%" }}>
        <ExplainDashboard />
        <ExplainSDK />
      </div>
    </div>
  );
};

export const ExplainDashboard: FunctionComponent = () => {
  // const { isDark } = useTheme();

  return (
    <div style={{ minHeight: 400, width: "100%" }}>
      {/* <Tabs>
        {dataExplainDashboard
          .filter((item) => {
            return item.isAvailable;
          })
          .map((item) => {
            return (
              <Tabs.Tab key={item.label} label={item.label}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    flexDirection: "column",
                    // "@media (min-width: 960px)": {
                    //   flexDirection: "row",
                    // },
                  }}
                >
                  <div className="stack-v" style={{ maxWidth: "420px" }}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    {item.extraInfo && (
                      <div
                        className="rounded-base"
                        // style={(theme) => {
                        //   return {
                        //     background: dark
                        //       ? theme.colors.gray[9]
                        //       : theme.colors.gray[1],
                        //   };
                        // }}
                      >
                        <p>{item.extraInfo}</p>
                      </div>
                    )}
                  </div>
                  {item.youtubeEmbedId ? (
                    <div
                    // style={(theme) => {
                    //   return {
                    //     width: "100%",
                    //     background: dark
                    //       ? theme.colors.gray[9]
                    //       : theme.colors.gray[1],
                    //   };
                    // }}
                    >
                      <VideoYouTube
                        title={item.label}
                        embedId={item.youtubeEmbedId}
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="rounded-base object-contain"
                        src={item.imageUrl}
                        alt={item.label}
                        // style={(theme) => {
                        //   return {
                        //     width: "100%",
                        //     maxWidth: 600,
                        //     borderWidth: "1px",
                        //     borderStyle: "solid",
                        //     borderColor: theme.colors.gray[2],
                        //     borderRadius: theme.radius.md,
                        //     img: { margin: "0 !important" },
                        //   };
                        // }}
                      />
                    </div>
                  )}
                </div>
              </Tabs.Tab>
            );
          })}
      </Tabs> */}
    </div>
  );
};

export const ExplainSDK: FunctionComponent = () => {
  return (
    <div
      id="ExplainSDK"
      style={{
        width: "100%",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      <div style={{ width: "100%", justifyContent: "space-between" }}>
        <div style={{ maxWidth: "42ch" }}>
          <h3>Auto generated API and SDK to speed up development time</h3>
          <p>
            We turn database schema to instantly provide API and SDK. So you can
            stop building repetitive CRUD API, and focus on your product.
          </p>
        </div>

        <div className="flex-wrap justify-start">
          {dataExplainSDKLinks.map((item) => {
            return (
              <div key={item.name} style={{ maxWidth: "170px" }}>
                <div className="stack-v">
                  <h5>{item.name}</h5>
                  <p className="text-sm">{item.description}</p>
                  <ButtonAnchor
                    href={item.url}
                    variant="light"
                    rightIcon={<Icon name="arrow-right" />}
                  >
                    Explore docs
                  </ButtonAnchor>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <Tabs style={{ width: "100%", minHeight: 330 }}>
        {dataExplainSDKCodes.map((item) => {
          return (
            <Tabs.Tab key={item.label} label={item.label}>
              <CodeHighlight
                colorScheme="dark"
                language="typescript"
                scrollAreaComponent="div"
                withLineNumbers
                copyLabel="Copy code"
                copiedLabel="Copied!"
                style={{
                  pre: { borderRadius: 0, marginTop: 0 },
                }}
              >
                {explainAPICodeImport + item.code}
              </CodeHighlight>
            </Tabs.Tab>
          );
        })}
      </Tabs> */}
    </div>
  );
};
