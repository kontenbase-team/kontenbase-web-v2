import { Image, VideoYouTube } from "~/components";
import { automationSamplesData } from "~/data";
import { usePreviewInterval } from "~/hooks";

export const HighlightedFeatures = () => {
  const {
    activeIndex,
    handleStartInterval,
    handleStopInterval,
    setActiveIndex,
  } = usePreviewInterval(automationSamplesData, 3000);

  return (
    <section className="layout-padding feature pt-20 pb-40">
      <div className="stack-v  mx-auto gap-20 md:gap-40">
        <div className="stack-v lg:stack-h w-full gap-x-6">
          <div className="mb-4 w-full lg:w-[380px] xl:w-[500px]">
            <h2 className="text-3xl md:text-4xl lg:min-w-[380px] xl:min-w-[500px]">
              Focus on <span className="highlighted-word">Data Driven</span>{" "}
              that help you analyze business better
            </h2>
            <p className="text-lg sm:text-xl">
              Bring all your data together to be managed, analyzed in sync.
            </p>
          </div>
          <div className="grow">
            <div className="card-shadow relative overflow-auto p-1">
              <VideoYouTube autoPlay loop title="Data" embedId="Fe3qAEhjSvw" />
            </div>
          </div>
        </div>
        <div className="stack-v lg:stack-h-reverse w-full gap-x-6">
          <div className="mb-4 w-full lg:w-[380px] xl:w-[500px]">
            <h2 className="text-3xl md:text-4xl lg:min-w-[380px] xl:min-w-[500px]">
              Create <span className="highlighted-word">custom App</span> easily
            </h2>
            <p className="text-lg sm:text-xl">
              Create custom app super fast, with our no code technology to give
              every department relevant information they needs, and simple way
              to take action.
            </p>
          </div>
          <div className="grow">
            <div className="card-shadow relative overflow-auto p-1">
              <VideoYouTube
                autoPlay
                loop
                title="App Builder"
                embedId="wEVasLcvUJM"
              />
            </div>
          </div>
        </div>
        <div className="stack-v lg:stack-h w-full gap-x-6">
          <div className="mb-4 w-full lg:w-[380px] xl:w-[500px]">
            <h2 className="text-3xl md:text-4xl lg:min-w-[380px] xl:min-w-[500px]">
              <span className="highlighted-word special">Custom workflow</span>{" "}
              for progressive company
            </h2>
            <div>
              <p className="text-lg sm:text-xl">
                Discover deep integration such as emailing, payment gateway, and
                any extension that automate your business workflows. Here some
                examples of automation for real use cases:
              </p>
              <ul className="stack-v mt-5 gap-2">
                {automationSamplesData.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <li
                      key={item.key}
                      className="pointer"
                      onMouseEnter={handleStopInterval}
                      onMouseLeave={handleStartInterval}
                    >
                      <button
                        type="button"
                        className="stack-h-center items-start gap-2 md:items-center"
                        onClick={() => setActiveIndex(index)}
                      >
                        <div
                          className={`w-full max-w-[32px] rounded-base bg-${
                            !isActive && "gray-400"
                          }`}
                          style={
                            isActive
                              ? {
                                  backgroundColor: item.color,
                                }
                              : {}
                          }
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            className="w-full"
                          />
                        </div>
                        <h6
                          className={`-mt-[0.15rem] text-left text-lg font-medium leading-tight sm:text-xl md:mt-0 ${
                            isActive
                              ? "text-black dark:text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {item.title}
                        </h6>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="grow">
            <div
              className="card-shadow relative overflow-auto rounded-base bg-transparent p-0"
              onMouseEnter={handleStopInterval}
              onMouseLeave={handleStartInterval}
            >
              <Image
                src={automationSamplesData[activeIndex].image}
                alt="Automation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
