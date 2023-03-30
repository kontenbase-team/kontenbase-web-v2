import { useEffect, useState } from "react";

import { ButtonGroupCTA } from "../common";

import { Image } from "~/components";

export const FooterBanner = () => {
  const [, setImageUrl] = useState("");

  useEffect(() => {
    const windowWith = window.innerWidth;
    if (windowWith >= 768) {
      setImageUrl("/assets/images/footer-banner-desktop.png");
    } else {
      setImageUrl("/assets/images/footer-banner-mobile.png");
    }
  }, []);

  return (
    <section className="stack-v lg:stack-h-reverse layout-padding footer-banner -mb-40 items-center gap-8 md:justify-center">
      <section className="stack-v gap-2 py-10 text-white">
        <div className="layout-content flex">
          <h2 className="mt-0 text-5xl sm:text-6xl">
            Better way than managing multiple apps
          </h2>
        </div>

        <div className="layout-content">
          <p className="text-lg sm:text-xl">
            Bring it all together in our single platform to automate workflows
            and data.
          </p>

          <ButtonGroupCTA className="mt-3" primaryCTAText="Try now for Free" />
        </div>
      </section>
      <section className="center">
        <Image
          alt="footer banner"
          src="/assets/images/footer-banner.png"
          className="h-full w-full lg:w-[640px] xl:max-w-[920px]"
        />
      </section>
    </section>
  );
};
