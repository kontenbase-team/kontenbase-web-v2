// import { useTheme } from "~/components";

import { dataPartners } from "~/data";

export const HomePartners = () => {
  // const { isLight } = useTheme();
  // const mode = isLight ? "light" : "dark";

  return (
    <section className="stack-v-center layout-padding">
      <h2 className="mt-0 text-center">
        Powering tech enterprise and startups
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
        {dataPartners.map((partner) => {
          return (
            <div key={partner.slug}>
              <img
                src={`/assets/images/partners/${partner.slug}-light.png`}
                alt={partner.name}
                className="filter-dim max-h-[52px] w-full max-w-[150px] object-contain sm:max-h-[70px] sm:max-w-[200px]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
