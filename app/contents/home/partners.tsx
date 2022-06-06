// import { useTheme } from "~/components";
import { dataPartners } from "~/data";

export const HomePartners = () => {
  // const { isLight } = useTheme();
  // const mode = isLight ? "light" : "dark";

  return (
    <section className="stack-v-center layout-padding">
      <h2 className="text-center">Powering tech enterprise and startups</h2>
      <div className="stack-h-center flex-wrap gap-5 sm:gap-10">
        {dataPartners.map((partner) => {
          return (
            <div key={partner.slug}>
              <img
                src={`/assets/images/partners/${partner.slug}-light.png`}
                alt={partner.name}
                className="filter-gray max-h-[52px] max-w-[150px] object-contain sm:max-h-[70px] sm:max-w-[200px]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
