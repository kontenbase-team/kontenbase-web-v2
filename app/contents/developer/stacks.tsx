import { Anchor } from "~/components";
import { dataStacks } from "~/data";

export const HomeStacks = () => {
  return (
    <section className="stack-v-center layout-padding mb-40">
      <h2 className="max-w-3xl text-center">
        Try our managed service with battle tested technology stack
      </h2>
      <div className="stack-h-center max-w-4xl flex-wrap justify-center gap-5 sm:gap-10">
        {dataStacks.map((stack) => {
          return (
            <Anchor
              className="filter-dim block"
              key={stack.name}
              href={stack.url}
            >
              <img
                src={stack.imageUrl}
                alt={stack.name}
                className="max-h-[52px] max-w-[280px] object-contain sm:max-h-[70px] sm:max-w-[380px]"
              />
            </Anchor>
          );
        })}
      </div>
    </section>
  );
};
