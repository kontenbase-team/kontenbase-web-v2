import { Anchor } from "~/components";
import { dataStacks } from "~/data";

export const HomeStacks = () => {
  return (
    <section className="stack-v-center layout-padding">
      <h2 className="text-center">
        Try our managed service with battle tested technology stack
      </h2>
      <div className="stack-h-center max-w-4xl flex-wrap justify-center gap-5 sm:gap-10">
        {dataStacks.map((stack) => {
          return (
            <div key={stack.name}>
              <Anchor key={stack.name} href={stack.url}>
                <img
                  src={stack.imageUrl}
                  alt={stack.name}
                  className="filter-gray max-h-[52px] max-w-[150px] object-contain sm:max-h-[70px] sm:max-w-[380px]"
                />
              </Anchor>
            </div>
          );
        })}
      </div>
    </section>
  );
};
