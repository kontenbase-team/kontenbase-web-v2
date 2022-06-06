export const dataFeatureStorage = {
  icon: "feature-storage",
  name: "Storage",
  title: "Object Storage",
  description:
    "Organize files and assets with storage API. Attach, upload, and download them through the services. Store any files possible.",
  docsUrl: "https://docs.kontenbase.com/storage/upload",
  imageUrl: "/assets/images/features/storage.png",
  subTitle: "Simple Object Storage API",
  subDescription:
    "We provide storage api that you can use directly without coding and connect to third parties.",
  codeExamples: [
    {
      label: "Upload file",
      code: `const file = event.target.files[0] // or via FormData
const { data, error } = await kontenbase.storage.upload(file)`,
    },
    {
      label: "Get file",
      code: ``,
    },
    {
      label: "Delete file",
      code: ``,
    },
  ],
};
