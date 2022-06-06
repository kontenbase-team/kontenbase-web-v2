import { FeatureHero } from "~/contents";
import { dataFeatureRealTime } from "~/data";
import { Layout } from "~/layouts";

export default function FeaturesRealTime() {
  return (
    <Layout variant="large">
      <FeatureHero feature={dataFeatureRealTime} />
      {/* <FeatureCodeExamples feature={dataFeatureRealTime} /> */}
    </Layout>
  );
}
