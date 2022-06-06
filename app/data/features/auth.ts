export const dataFeatureAuth = {
  icon: "feature-auth",
  name: "Auth",
  title: "Authentication & Authorization",
  description:
    "Built in basic authentication, 3rd party auth, and authorization like role management without coding. Fast and secure!",
  docsUrl: "https://docs.kontenbase.com/auth/register",
  imageUrl: "/assets/images/features/auth.png",
  subTitle: "Auth API made easy",
  subDescription:
    "We provide auto generated Auth API that work on client and server-side applications.",
  codeExamples: [
    {
      label: "Register",
      code: `const { user, error } = await kontenbase.auth.register({
  firstName: 'Your',
  lastName: 'Name',
  email: 'yourname@mail.com',
  password: 'secure_your_password123',
})`,
    },
    {
      label: "Log in",
      code: `const { user, error } = await kontenbase.auth.login({
  email: 'yourname@mail.com',
  password: 'secure_your_password123',
})`,
    },
    {
      label: "Log out",
      code: `const { user, error } = await kontenbase.auth.logout()`,
    },
    {
      label: "Get user",
      code: `const { user, error } = await kontenbase.auth.user()`,
    },
    {
      label: "Update user",
      code: `const { user, error } = await kontenbase.auth.update({ firstName: 'Our' })`,
    },
    {
      label: "Reset password",
      code: `const { data, error } = await kontenbase.auth.resetPassword('yourname@mail.com')`,
    },
  ],
};
