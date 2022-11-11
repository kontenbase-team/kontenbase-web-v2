import { IconSpan, Logo, RemixLink } from "~/components";
import { dataVersusStacks } from "~/data";

export const HomeVersus = () => {
  return (
    <section className="stack-v-center layout-padding gap-10">
      <div className="stack-v-center container-low text-center">
        <h1 className="mb-2 max-w-2xl">
          Save big with <span className="text-primary-500">Kontenbase</span>
        </h1>

        <p className="text-dim max-w-3xl text-base sm:text-xl">
          Kontenbase replace a bunch of complex architecture. See how our{" "}
          <RemixLink to="/pricing" className="break-normal">
            all-in-one price
          </RemixLink>{" "}
          compares to when you have to combine all of them.
        </p>
      </div>

      <VersusPanel />
    </section>
  );
};

export const VersusPanel = () => {
  const dataVersusChecks = [
    "VPS",
    "Database",
    "Object Storage",
    "Message Queue",
    "Real-time/Multiplayer Server",
  ];

  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 lg:flex-row lg:flex-nowrap">
      <div className="space-y-5">
        <div className="card-shadow">
          <Logo />
          <div>
            <h4>Kontenbase Managed Service</h4>
            <p className="text-xl">Start from free or $25/project/month</p>
          </div>
          <ul className="space-y-3">
            {dataVersusChecks.map((item) => {
              return (
                <li key={item}>
                  <h5 className="stack-h-center gap-2 text-xl">
                    <IconSpan name="check-circle" className="text-green-500" />{" "}
                    {item}
                  </h5>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-dim text-center">
          <h3 className="mb-0">Free trial or $25/month managed by us</h3>
          <p>Grow as your company go without hidden cost!</p>
        </div>
      </div>

      <div className="flex min-h-[100px] min-w-[100px] items-center justify-center rounded-full bg-primary-500">
        <span className="text-4xl font-bold text-primary-50">VS</span>
      </div>

      <div className="space-y-5">
        <div className="card-shadow">
          <div className="space-y-5">
            {dataVersusStacks.map((item) => {
              return (
                <div
                  key={item.icon}
                  className="stack-v sm:stack-h-center flex-wrap gap-2 sm:gap-5"
                >
                  <IconSpan
                    name={item.icon}
                    className="text-2xl text-primary-500 sm:text-3xl"
                  />
                  <div>
                    <h4 className="mt-0">{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-dim text-center">
          <h3 className="mb-0">$219.18/month managed by you</h3>
          <p>Also additional costs to maintain on growth</p>
        </div>
      </div>
    </div>
  );
};
