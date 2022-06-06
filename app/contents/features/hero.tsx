import { ButtonGroupCTA } from "../common";

import { ButtonAnchor, IconSpan, IconTheme } from "~/components";

interface FeatureHeroProps {
  feature: {
    icon: string;
    name: string;
    title: string;
    description: string;
    docsUrl: string;
    imageUrl: string;
  };
}

export const FeatureHero = ({ feature }: FeatureHeroProps) => {
  return (
    <div className="flex min-h-[420px] flex-wrap justify-between gap-5 pt-10 sm:pt-20">
      <div className="stack-v max-w-lg gap-3 sm:gap-5">
        <div className="flex items-center gap-3 sm:gap-5">
          <IconTheme name={feature.icon} />
          <h3 className="m-0">{feature.name}</h3>
        </div>

        <h1 className="m-0 text-left">{feature.title}</h1>
        <p>{feature.description}</p>

        <ButtonGroupCTA
          secondaryCTA={
            <ButtonAnchor
              variant="outline"
              href={feature.docsUrl}
              leftIcon={<IconSpan name="docs" className="mr-2" />}
            >
              Documentation
            </ButtonAnchor>
          }
        />
      </div>

      <div>
        <img
          className="border-panel w-full max-w-4xl rounded-base object-contain xl:max-w-2xl"
          src={feature.imageUrl}
          alt={feature.name}
        />
      </div>
    </div>
  );
};
