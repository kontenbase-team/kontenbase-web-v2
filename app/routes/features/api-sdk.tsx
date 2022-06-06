import { FeatureHero } from "~/contents";
import { dataFeatureAPISDK } from "~/data";
import { Layout } from "~/layouts";

export default function FeatureAPISDK() {
  return (
    <Layout variant="large">
      <FeatureHero feature={dataFeatureAPISDK} />
      {/* <FeatureCodeExamples feature={dataFeatureAPISDK} /> */}
    </Layout>
  );
}
