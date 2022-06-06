import { FeatureHero } from "~/contents";
import { dataFeatureAuth } from "~/data";
import { Layout } from "~/layouts";

export default function FeaturesAuth() {
  return (
    <Layout variant="large">
      <FeatureHero feature={dataFeatureAuth} />
      {/* <FeatureCodeExamples feature={dataFeatureAuth} /> */}
    </Layout>
  );
}
