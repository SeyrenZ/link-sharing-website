import {
  CodepenIcon,
  CodewarsIcon,
  DevtoIcon,
  FacebookIcon,
  FreeCodeCampIcon,
  FrontendMentorIcon,
  FrontendMentorIconColorfull,
  GithubIcon,
  GitlabIcon,
  HashnodeIcon,
  LinkedinIcon,
  StackOverflowIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../src/components/svgs";

type PlatformInfo = {
  name: string;
  icon: JSX.Element;
  value: string;
};

type PlatformValidate = {
  name: string;
  color: string;
  text: string;
  icon: JSX.Element;
};

const platforms: PlatformInfo[] = [
  { name: "GitHub", icon: <GithubIcon />, value: "github" },
  {
    name: "Frontend Mentor",
    icon: <FrontendMentorIcon />,
    value: "frontendmentor",
  },
  { name: "Twitter", icon: <TwitterIcon />, value: "twitter" },
  { name: "LinkedIn", icon: <LinkedinIcon />, value: "linkedin" },
  { name: "YouTube", icon: <YoutubeIcon />, value: "youtube" },
  { name: "Facebook", icon: <FacebookIcon />, value: "facebook" },
  { name: "Hashnode", icon: <HashnodeIcon />, value: "hashnode" },
  { name: "Codepen", icon: <CodepenIcon />, value: "codepen" },
  { name: "Codewars", icon: <CodewarsIcon />, value: "codewars" },
  { name: "Dev.to", icon: <DevtoIcon />, value: "devto" },
  { name: "Gitlab", icon: <GitlabIcon />, value: "gitlab" },
  { name: "Twitch", icon: <TwitchIcon />, value: "twitch" },
  { name: "FreeCodeCamp", icon: <FreeCodeCampIcon />, value: "freecodecamp" },
  {
    name: "Stack Overflow",
    icon: <StackOverflowIcon />,
    value: "stackoverflow",
  },
];

const platformsValidation: { [key: string]: PlatformValidate } = {
  github: {
    name: "GitHub",
    color: "#1A1A1A",
    icon: <GithubIcon />,
    text: "#FFFFFF",
  },
  frontendmentor: {
    name: "Frontend Mentor",
    color: "#FFFFFF",
    icon: <FrontendMentorIconColorfull />,
    text: "#333333",
  },
  twitter: {
    name: "Twitter",
    color: "#43B7E9",
    icon: <TwitterIcon />,
    text: "#FFFFFF",
  },
  linkedin: {
    name: "LinkedIn",
    color: "#2D68FF",
    icon: <LinkedinIcon />,
    text: "#FFFFFF",
  },
  youtube: {
    name: "YouTube",
    color: "#EE3939",
    icon: <YoutubeIcon />,
    text: "#FFFFFF",
  },
  facebook: {
    name: "Facebook",
    color: "#2442AC",
    icon: <FacebookIcon />,
    text: "#FFFFFF",
  },
  hashnode: {
    name: "Hashnode",
    color: "#0330D1",
    icon: <HashnodeIcon />,
    text: "#FFFFFF",
  },
  codepen: {
    name: "Codepen",
    color: "#0EBEFF",
    icon: <CodepenIcon />,
    text: "#FFFFFF",
  },
  codewars: {
    name: "Codewars",
    color: "#8A1A50",
    icon: <CodewarsIcon />,
    text: "#FFFFFF",
  },
  devto: {
    name: "Dev.to",
    color: "#333333",
    icon: <DevtoIcon />,
    text: "#FFFFFF",
  },
  gitlab: {
    name: "Gitlab",
    color: "#EB4925",
    icon: <GitlabIcon />,
    text: "#FFFFFF",
  },
  twitch: {
    name: "Twitch",
    color: "#EE3FC8",
    icon: <TwitchIcon />,
    text: "#FFFFFF",
  },
  freecodecamp: {
    name: "FreeCodeCamp",
    color: "#302267",
    icon: <FreeCodeCampIcon />,
    text: "#FFFFFF",
  },
  stackoverflow: {
    name: "Stack Overflow",
    color: "#F48024",
    icon: <StackOverflowIcon />,
    text: "#FFFFFF",
  },
};

export { platforms };
export { platformsValidation };
