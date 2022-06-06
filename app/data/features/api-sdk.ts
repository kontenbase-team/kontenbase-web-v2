const id = "abcdefghijk123456789";

export const dataFeatureAPISDK = {
  icon: "feature-rest",
  name: "REST API",
  title: "Database to REST API & SDK",
  description:
    "Auto generated REST API & SDK from database schema. Change schema on the fly! SDK for better developer experience.",
  docsUrl: "https://docs.kontenbase.com/overview/sdk",
  imageUrl: "/assets/images/features/rest-api.png",
  subTitle: "Never write basic API again",
  subDescription:
    "We introspect your database schema within Kontenbase and provide the APIs & SDK instantly. So you can focus on building your product. Let Kontenbase handle the CRUD!",
  codeExamples: [
    {
      label: "Create a record",
      code: `const { data, error } = await kontenbase.service('articles').create({
  title: 'My First Post',
  content: 'Hello this is the first post.',
  category: '${id}' // link to other service by id
})`,
    },
    {
      label: "Read a record",
      code: `const { data, error } = await kontenbase.service('articles').find()`,
    },
    {
      label: "Update a record",
      code: `const { data, error } = await kontenbase.service('articles')
  .update({ where: { tags: 'software' } }, {
    like: -1,
  })`,
    },
    {
      label: "Delete a record",
      code: `const { data, error } = await kontenbase.service('articles').delete({
    where: { tags: 'software' }
  })`,
    },
    {
      label: "Link a record",
      code: `const { data, error } = await kontenbase.service('articles')
  .link(
    '${id}', // the id in articles service (articles.id)
    { tags: '${id}' } // the service that wanted to be linked, and its id (tags.id)
  )`,
    },
    {
      label: "Sort  records",
      code: `const { data, error } = await kontenbase.service('articles')
  .find({ sort: { createdAt: -1 } })`,
    },
    {
      label: "Filter records",
      code: `const { data, error } = await kontenbase.service('articles')
  .find({
    or: [
      { tags: 'news' },
      { tags: 'info' }
    ]
  })`,
    },
  ],
};
