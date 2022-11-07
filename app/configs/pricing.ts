export const configPricingFeatures = [
  { icon: "database", name: "Database" },
  { name: "Database Space" },
  { name: "Database Transfer" },
  { icon: "auth", name: "Auth" },
  { name: "Users" },
  { icon: "storage", name: "Storage" },
  { name: "Storage Space" },
  { name: "Storage Transfer" },
];

export const configPricingPlans = [
  {
    name: "Free",
    price: {
      EUR: "0",
      IDR: "0",
      MYR: "0",
      PHP: "0",
      SGD: "0",
      USD: "0",
    },
    note: "14 days trial",
    info: "For experiments and simple applications",
    button: {
      text: "Sign up for Free Trial",
      to: "/signup",
    },
    benefits: [
      "Shared container",
      "Up to 250 MB database space",
      "Up to 5 GB database transfer bandwidth",
      "Up to 500 MB file storage space",
      "Up to 5 GB file storage transfer bandwidth",
      "Up to 500 registered users",
      "Community Support",
      // "1-day log retention",
    ],
    features: [null, "50 MB", "500 MB", null, 50, null, "250 MB", "500 MB"],
  },
  {
    name: "Pro",
    price: {
      EUR: "23",
      IDR: "360,000",
      MYR: "110",
      PHP: "1325",
      SGD: "34",
      USD: "25",
    },
    note: "/project/month",
    info: "For advanced production, with pay per usage",
    button: {
      text: "Sign up for Pro",
      to: "/signup",
    },
    benefits: [
      "Dedicated container",
      "Up to 8 GB database space + $0.5 per GB",
      "Up to 50 GB database transfer bandwidth + $0.09 per GB",
      "Up to 100 GB file storage space + $0.05 per GB",
      "Up to 50 GB file storage transfer bandwidth + $0.09 per GB",
      "Up to 50,000 registered users + $0.001 per extra user",
      "Prioritized Team Support",
      // "30-day log retention",
    ],
    features: [
      null,
      "8 GB + $0.5 per GB",
      "50 GB + $0.09 per GB",
      null,
      "50,000 + $0.001 per user",
      null,
      "100 GB + $0.05 per GB",
      "50 GB + $0.09 per GB",
    ],
  },
  {
    name: "Enterprise",
    price: {
      EUR: "",
      IDR: "",
      MYR: "",
      PHP: "",
      SGD: "",
      USD: "",
    },
    note: "Contract",
    info: "For large-scale mission critical applications",
    button: {
      text: "Schedule Demo",
    },
    benefits: [
      "Everything from the Pro plan",
      "Self hosted or on-premise",
      "Point in time recovery",
      "Designated Support manager & SLAs",
      "Enterprise OAuth providers",
      "SSO & SAML",
      "Custom contracts & invoicing",
      "On-premise support",
      "24×7×365 premium enterprise support",
      // "SOC2",
    ],
    features: [
      null,
      "Unlimited",
      "Unlimited",
      null,
      "Unlimited",
      null,
      "Unlimited",
      "Unlimited",
    ],
  },
];
