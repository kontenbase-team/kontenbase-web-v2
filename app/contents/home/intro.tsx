import { Carousel } from "flowbite-react";

import { Image } from "~/components";
import { ButtonGroupCTA } from "~/contents";
import { carouselList } from "~/data";

export const HomeIntro = () => {
  return (
    <section className="stack-v xl:stack-h hero layout-padding g:gap-10 relative gap-6 pt-5 pb-20 xl:pb-40 xl:pt-20">
      <section className="stack-v gap-3">
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
      <section className="hero-carousel flex grow justify-end">
        <div className="h-full w-full xl:max-w-3xl">
          <Carousel slideInterval={5000}>
            {carouselList.map((item) => (
              <Image key={item.id} src={item.image} alt={item.label} />
            ))}
          </Carousel>
        </div>
        {/* <Image
          src="/assets/images/hero-image.png"
          alt="kontenbase-hero"
          className="w-full"
        /> */}
      </section>
    </section>
  );
};
