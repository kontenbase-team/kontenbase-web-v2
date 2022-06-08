import { Badge, ButtonLink, IconTheme, IconVechai } from "~/components";
import { dataFeaturesSimple } from "~/data";
import { IconArrowRight } from "~/libs";

export const HomeFeatures = () => {
  return (
    <section className="stack-v-center layout-padding layout-content large pt-10">
      <h1 className="max-w-2xl text-center">
        Focus on your products, don’t reinvent the wheel!
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataFeaturesSimple.map((feature: any) => {
          return <Feature key={feature.icon} feature={feature} />;
        })}
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: any;
}

export const Feature = ({ feature }: FeatureCardProps) => {
  return (
    <div className="stack-v items-start gap-3">
      <div className="stack-h items-center gap-3">
        <IconTheme name={feature.icon} />
        <h4 className="m-0">{feature.title}</h4>
      </div>

      <p className="text-sm">{feature.description}</p>

      {feature.isAvailable && feature.to && (
        <ButtonLink
          to={feature.to}
          variant="light"
          size="xs"
          rightIcon={
            <IconVechai
              as={IconArrowRight}
              label="go"
              className="ml-1 h-4 w-4"
            />
          }
        >
          Learn more
        </ButtonLink>
      )}

      {feature.isComingSoon && (
        <Badge color="primary" variant="light">
          Coming Soon
        </Badge>
      )}

      {feature.isBuiltIn && (
        <Badge color="primary" variant="light">
          Built In
        </Badge>
      )}
    </div>
  );
};
