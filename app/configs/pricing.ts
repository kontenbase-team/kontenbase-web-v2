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
    note: "for 1 project",
    info: "Suitable for development and education",
    button: {
      text: "Sign Up",
      to: "/signup",
    },
    features: [
      "Database",
      "REST API",
      "Drag & Drop Builder",
      "Automation",
      "Auth",
      "File Storage",
      "Realtime",
    ],
    benefits: [
      "Database & File Storage data wipe after 7 days",
      "1 App Preview only (drag & drop front-end)",
      "No collaborator",
      "150MB Database space",
      "500MB Database Bandwidth",
      "150MB File Storage",
      "500MB File Storage Bandwidth",
      "50 registered users",
    ],
  },
  {
    name: "Professional",
    price: {
      EUR: "10",
      IDR: "155.000",
      MYR: "44",
      PHP: "551",
      SGD: "14",
      USD: "10",
    },
    note: "per project/month",
    info: "Best for production purpose",
    button: {
      text: "Sign Up",
      to: "/signup",
    },
    features: [
      "Everything on Free plan",
      "Database import/export",
      "Database versioning & backup",
      "Custom Auth",
      "Custom API Gateway",
    ],
    benefits: [
      "Pay as you go",
      "1 app preview + $25/app publication (drag & drop front-end)",
      "1 collaborator + $10/collaborator",
      "250MB Database space + $0.5/GB",
      "1GB Database Bandwidth + $0.09/GB",
      "500MB File Storage + $0.05/GB",
      "1GB File Storage Bandwidth + $0.09/GB",
      "500 registered users + $0.001/extra user",
      "Working hour customer service SLAs",
    ],
  },
  // {
  //   name: "Enterprise",
  //   price: {
  //     EUR: "",
  //     IDR: "",
  //     MYR: "",
  //     PHP: "",
  //     SGD: "",
  //     USD: "",
  //   },
  //   note: "for unlimited projects",
  //   info: "Aimed for large-scale mission critical applications",
  //   button: {
  //     text: "Contact Us",
  //     to: "/microgen",
  //   },
  //   features: [
  //     "Everything on Pro plan",
  //     "Custom Function",
  //     "Online Code Editor",
  //     "Multi env database",
  //     "Multi env function",
  //     "Infrastructure as code",
  //     "Database Sync to any db",
  //     "Add-ons for any language and libs",
  //     "Active active region",
  //     "Monitoring",
  //     "Custom domain Function",
  //     "Server automation & scale GUI",
  //     "GraphQL support",
  //     "Caching support",
  //     "GitLab for private repo",
  //     "External storage config support",
  //     "Message queue trigger",
  //     "Blockchain (coming soon)",
  //   ],
  //   benefits: [
  //     "Unlimited Usage",
  //     "On-Premise Dedicated Support",
  //     "Host on your server as appliance (We help the installation)",
  //     "Managed Legacy Apps",
  //     "Point in time recovery",
  //     "Designated Support manager & SLAs",
  //     "Custom contracts & invoicing",
  //     "24×7×365 premium enterprise support",
  //   ],
  // },
];

export const configSpecialPricingPlans = [
  {
    name: "Custom Development & Consultation",
    description:
      "We'll help you to build your custom apps with competitive price",
    icon: "/assets/icons/pricing/consultation.svg",
    bgColor: "#48da85",
    button: {
      text: "Contact Us",
      to: "/form?interest=custom-development",
    },
  },
  {
    name: "No Code Company Training",
    description:
      "We help employee implementing No Code to automate workflow and boost productivity by creating 3 real world applications!",
    icon: "/assets/icons/pricing/training.svg",
    bgColor: "#f8de4b",
    button: {
      text: "Contact Us",
      to: "/form?interest=company-training",
    },
  },
];
