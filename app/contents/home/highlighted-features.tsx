import { FeaturePreview } from "./feature-preview";

import { Image } from "~/components";
import { dataHighlightedFeatures } from "~/data";

export const HighlightedFeatures = () => {
  return (
    <section className="layout-padding feature pt-20 pb-40">
      <div className="stack-v layout-content large mx-auto gap-20 md:gap-40">
        {dataHighlightedFeatures.map((feature, index) => {
          return (
            <HighlightedFeatureSection
              key={feature.title}
              feature={feature}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  youtubeId?: string;
}

interface ExcellentFeatureSectionProps {
  feature: Feature;
  index: number;
}

export const HighlightedFeatureSection = ({
  feature,
  index,
}: ExcellentFeatureSectionProps) => {
  return (
    <section
      className={`stack-v w-full gap-x-6 ${
        index % 2 ? "lg:stack-h-reverse" : "lg:stack-h"
      }`}
    >
      <div className="mb-4 w-full">
        <h2
          className="text-3xl md:min-w-[380px] md:text-4xl"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: feature.title }}
        />
        <p>{feature.description}</p>
      </div>
      <div className="grow">
        {feature?.youtubeId ? (
          <FeaturePreview
            image={feature.image}
            imageAlt={feature.imageAlt}
            youtubeId={feature.youtubeId}
          />
        ) : (
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            className="card-shadow p-1"
          />
        )}
      </div>
    </section>
  );
};
