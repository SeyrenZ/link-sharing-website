import {
  CodepenIcon,
  CodewarsIcon,
  DevtoIcon,
  FacebookIcon,
  FreeCodeCampIcon,
  FrontendMentorIcon,
  GithubIcon,
  GitlabIcon,
  HashnodeIcon,
  LinkedinIcon,
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
];

const platformsValidation: { [key: string]: PlatformValidate } = {
  github: { name: "GitHub", color: "#333", icon: <GithubIcon /> },
  frontendmentor: {
    name: "Frontend Mentor",
    color: "#0a192f",
    icon: <FrontendMentorIcon />,
  },
  twitter: { name: "Twitter", color: "#1DA1F2", icon: <TwitterIcon /> },
  linkedin: { name: "LinkedIn", color: "#0077b5", icon: <LinkedinIcon /> },
  youtube: { name: "YouTube", color: "#FF0000", icon: <YoutubeIcon /> },
  facebook: { name: "Facebook", color: "#4267B2", icon: <FacebookIcon /> },
  hashnode: { name: "Hashnode", color: "#2962FF", icon: <HashnodeIcon /> },
  codepen: { name: "Codepen", color: "#0EBEFF", icon: <CodepenIcon /> },
  codewars: { name: "Codewars", color: "#B1361E", icon: <CodewarsIcon /> },
  devto: { name: "Dev.to", color: "#0A0A0A", icon: <DevtoIcon /> },
  gitlab: { name: "Gitlab", color: "#FC6D26", icon: <GitlabIcon /> },
  twitch: { name: "Twitch", color: "#6441A4", icon: <TwitchIcon /> },
  freecodecamp: {
    name: "FreeCodeCamp",
    color: "#006400",
    icon: <FreeCodeCampIcon />,
  },
};

export { platforms };
export { platformsValidation };
