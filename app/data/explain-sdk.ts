export const explainAPICodeImport = `import { KontenbaseClient } from '@kontenbase/sdk'

const kontenbase = new KontenbaseClient({ apiKey: 'abcdefghijk123456789' })

`;

export const explainAPIData = [
  {
    label: "Read",
    code: `const { data, error } = await kontenbase.service('articles').find()`,
  },
  {
    label: "Create",
    code: `const { data, error } = await kontenbase.service('articles').create({
  title: 'My First Post',
  content: 'Hello this is the first post.',
  category: "abcdefghijk123456789" // link to other service by id
})`,
  },
  {
    label: "Update",
    code: `const { data, error } = await kontenbase.service('articles')
  .update({ where: { tags: "software" } }, {
    like: -1,
  })`,
  },
  {
    label: "Delete",
    code: `const { data, error } = await kontenbase.service('articles').delete({
  where: { tags: "software" }
})`,
  },
  {
    label: "Register User",
    code: `const { user, error } = await kontenbase.auth.register({
  firstName: 'Your',
  lastName: 'Name',
  email: 'yourname@mail.com',
  password: 'secure_your_password123',
})`,
  },
  {
    label: "Login User",
    code: `const { user, error } = await kontenbase.auth.login({
  email: 'yourname@mail.com',
  password: 'secure_your_password123',
})`,
  },
  {
    label: "Real-Time",
    code: `kontenbase.realtime.subscribe(
  'articles',
  { event: 'CREATE_RECORD', where: { tags: 'software' } },
  (message) => {
    console.log(message)
  }
)`,
  },
];
