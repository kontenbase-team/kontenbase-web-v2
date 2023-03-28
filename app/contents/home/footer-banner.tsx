// import { useTheme } from "~/components";

import { useEffect, useState } from "react";

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
    <section className="stack-v md:stack-h-reverse layout-padding footer-banner items-center gap-8 md:justify-center">
      <section className="stack-v gap-3 text-white">
        <div className="layout-content flex">
          <h2>
            Never <span className="text-primary-500">confuse</span> to{" "}
            <span className="text-primary-500">manage multiple apps</span> again
          </h2>
        </div>

        <div className="layout-content">
          <p className="text-lg sm:text-xl">
            Accelerate your business by easily managing your data, workflows and
            teams.
          </p>
        </div>
      </section>
      <section className="center">
        <Image
          alt="footer banner"
          src="/assets/images/footer-banner.png"
          className="w-[530px]"
        />
      </section>
    </section>
  );
};
