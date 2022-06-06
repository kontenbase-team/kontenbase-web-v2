import { FeatureHero } from "~/contents";
import { dataFeatureStorage } from "~/data";
import { Layout } from "~/layouts";

export default function FeaturesStorage() {
  return (
    <Layout variant="large">
      <FeatureHero feature={dataFeatureStorage} />
      {/* <FeatureCodeExamples feature={dataFeatureStorage} /> */}
    </Layout>
  );
}
