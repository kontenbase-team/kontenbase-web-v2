import { Image } from "~/components";
import { ButtonGroupCTA } from "~/contents";

export const HomeIntro = () => {
  return (
    <section className="stack-v lg:stack-h hero relative gap-6 pt-5 pb-20 lg:pb-40 lg:pt-20">
      <section className="stack-v layout-padding grow gap-3">
        <div className="layout-content small">
          <Image src="/assets/icons/hero-blink.svg" alt="hero" />
          <h1 className="h0 special max-w-[415px] sm:max-w-[680px]">
            <span className="highlighted-word">Automate</span> your data and{" "}
            <span className="highlighted-word">workflow</span> with{" "}
            <span className="highlighted-word">no-code</span> platform
          </h1>
        </div>

        <div className="layout-content small">
          <p className="text-lg sm:text-xl">
            Accelerate your business by easily managing your data, workflows and
            teams.
          </p>
        </div>

        <ButtonGroupCTA />
      </section>
      <section className="grow lg:max-w-lg xl:max-w-xl">
        <Image
          src="/assets/images/hero-image.png"
          alt="kontenbase-hero"
          className="w-full"
        />
      </section>
    </section>
  );
};
