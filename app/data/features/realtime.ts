export const dataFeatureRealTime = {
  icon: "feature-realtime",
  name: "Real-Time",
  title: "Real-Time via WebSocket",
  description:
    "Built in real-time support via WebSocket with battle tested performance!",
  docsUrl: "https://docs.kontenbase.com/realtime/subscribe",
  imageUrl: "/assets/images/features/realtime.png",
  subTitle: "Realtime Subscriptions with high availability & High Performance.",
  subDescription:
    "We create a real-time subscriptions with WebSocket so you can use it and sure about the performance.",
  codeExamples: [
    {
      label: "Subscribe",
      code: `kontenbase.realtime.subscribe(
  'articles',
  { event: 'CREATE_RECORD', where: { tags: 'news' } },
  (message) => {
    console.log(message)
  }
)`,
    },
    {
      label: "Unsubscribe",
      code: `const subscription = await kontenbase.realtime.subscribe(
  'articles',
  { event: 'CREATE_RECORD', where: { tags: 'sport' } },
  (message) => {
    console.log(message)
  }
)

kontenbase.realtime.unsubscribe(subscription)`,
    },
  ],
};
