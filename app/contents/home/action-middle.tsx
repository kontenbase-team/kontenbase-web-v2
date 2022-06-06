import { ButtonGroupCTA } from "~/contents";

export const HomeActionMiddle = () => {
  return (
    <section className="stack-v-center layout-padding layout-content bg-tertiary py-20 text-center">
      <h1 className="max-w-2xl">
        Are you ready to try the power of{" "}
        <span className="text-primary-500">no code</span>?
      </h1>

      <p className="text-dim max-w-2xl text-lg sm:text-2xl">
        Speed up development time by up to 90% then launch within days. Focus on
        product and let us do the scale!
      </p>

      <ButtonGroupCTA />
    </section>
  );
};
