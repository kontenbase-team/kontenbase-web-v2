import {
  IconAmazonEC2,
  IconAmazonS3,
  IconArrowLeft,
  IconArrowRight,
  IconAuth,
  IconBackpack,
  IconBolt,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconCircle,
  IconCloud,
  IconCog,
  IconColyseus,
  IconCV,
  IconDark,
  IconDatabase,
  IconDev,
  IconDeveloper,
  IconDiscord,
  IconDocs,
  IconEducator,
  IconFacebook,
  IconFunction,
  IconGitHub,
  IconInstagram,
  IconKafka,
  IconKey,
  IconKontenbase,
  IconLight,
  IconLinkedIn,
  IconMedium,
  IconMenu,
  IconMessage,
  IconMessageQueue,
  IconMongoDB,
  IconPackage,
  IconProductHunt,
  IconRealTime,
  IconScroll,
  IconSlack,
  IconStorage,
  IconTelegram,
  IconTimer,
  IconTwist,
  IconTwitter,
  IconWebsite,
  IconYouTube,
} from "~/libs";

import type { HTMLElementProps } from "~/types";

export { Icon as IconVechai } from "@vechaiui/react";

// import IconMicrogen from "~/components/icons/microgen.svg";

/**
 * Icon list mapping
 */

export const iconMaps = {
  "amazon-ec2": <IconAmazonEC2 />,
  "amazon-s3": <IconAmazonS3 />,
  "arrow-left": <IconArrowLeft />,
  "arrow-right": <IconArrowRight />,
  "check-circle": <IconCheckCircle />,
  "feature-auth": <IconAuth />,
  "feature-functions": <IconFunction />,
  "feature-message-queue": <IconMessageQueue />,
  "feature-realtime": <IconRealTime />,
  "feature-rest": <IconDatabase />,
  "feature-storage": <IconStorage />,
  // hashnode: <IconHashnode />,
  // instagram: <IconInstagram />,
  // polywork: <IconPolywork />,
  auth: <IconAuth />,
  bolt: <IconBolt />,
  calendar: <IconCalendar />,
  check: <IconCheck />,
  circle: <IconCircle />,
  cloud: <IconCloud />,
  cog: <IconCog />,
  colyseus: <IconColyseus />,
  cv: <IconCV />,
  dark: <IconDark />,
  database: <IconDatabase />,
  default: <IconCircle />,
  dev: <IconDev />,
  developer: <IconDeveloper />,
  discord: <IconDiscord />,
  docs: <IconDocs />,
  educator: <IconEducator />,
  facebook: <IconFacebook />,
  function: <IconFunction />,
  github: <IconGitHub />,
  instagram: <IconInstagram />,
  kafka: <IconKafka />,
  key: <IconKey />,
  kontenbase: <IconKontenbase />,
  light: <IconLight />,
  linkedin: <IconLinkedIn />,
  medium: <IconMedium />,
  menu: <IconMenu />,
  message: <IconMessage />,
  mongodb: <IconMongoDB />,
  producthunt: <IconProductHunt />,
  project: <IconPackage weight="fill" />,
  readcv: <IconScroll weight="fill" />,
  showwcase: <IconBackpack weight="fill" />,
  slack: <IconSlack />,
  storage: <IconStorage />,
  telegram: <IconTelegram />,
  timer: <IconTimer />,
  twist: <IconTwist />,
  twitter: <IconTwitter />,
  website: <IconWebsite />,
  youtube: <IconYouTube />,
};

/**
 * Switch function to enable mapping
 */

const switchFunction = (lookupObject: any, defaultCase = "default") => {
  return (expression: string | number) => {
    return lookupObject[expression] || lookupObject[defaultCase];
  };
};

const iconSwitch = switchFunction(iconMaps, "default");

/**
 * Icon component
 */

interface IconProps {
  name: string;
}

export const Icon = ({ name }: IconProps) => {
  return iconSwitch(name);
};

/**
 * IconSpan component
 */

interface IconSpanProps extends HTMLElementProps {
  name: string;
}

export const IconSpan = ({ name, className }: IconSpanProps) => {
  return (
    <span className={className}>
      <Icon name={name} />
    </span>
  );
};
