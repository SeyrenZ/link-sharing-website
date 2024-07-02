import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  LinkIconSmall,
  LinkProps,
  LinkedinIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./svgs";
import { Input } from "./ui/input";
import { useLinks } from "@/context/link-state";

const LinkCustomizationCard = () => {
  const { links, removeLink, addLink } = useLinks();

  return (
    <>
      <div className="w-full h-full p-5 flex flex-col gap-y-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-primary-grey font-bold text-[16px] leading-[150%]">
            <LinkProps />
            Link #1
          </div>
          <button
            onClick={() => links.length > 0 && removeLink(links[0].timestamp)}
            className="text-primary-grey text-[16px] leading-[150%] hover:underline"
          >
            Remove
          </button>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <div className="text-xs text-primary-darkGrey">Platform</div>
          <Select>
            <SelectTrigger className="w-full h-[48px] rounded-lg focus-visible:ring-[0px] focus-visible:ring-offset-0 hover:border-primary-violet hover:ring-offset-0 hover:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)] transition ease-in-out duration-300">
              <SelectValue
                placeholder={
                  <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey ">
                    <span className="text-primary-grey">
                      <GithubIcon />
                    </span>
                    Github
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="group cursor-pointer" value="Github">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <GithubIcon />
                  </span>
                  Github
                </div>
              </SelectItem>
              <SelectItem
                className="group cursor-pointer"
                value="Frontend Mentor"
              >
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <FrontendMentorIcon />
                  </span>
                  Frontend Mentor
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Twitter">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <TwitterIcon />
                  </span>
                  Twitter
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Linkedin">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <LinkedinIcon />
                  </span>
                  Linkedin
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="YouTube">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <YoutubeIcon />
                  </span>
                  YouTube
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Facebook">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <FacebookIcon />
                  </span>
                  Facebook
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Twitch">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <TwitchIcon />
                  </span>
                  Twitch
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Dev.to">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <DevtoIcon />
                  </span>
                  Dev.to
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Codewars">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <CodewarsIcon />
                  </span>
                  Codewars
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Codepen">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <CodepenIcon />
                  </span>
                  Codepen
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="freeCodeCamp">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <FreeCodeCampIcon />
                  </span>
                  freeCodeCamp
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="GitLab">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <GitlabIcon />
                  </span>
                  GitLab
                </div>
              </SelectItem>
              <SelectItem className="group cursor-pointer" value="Hashnode">
                <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                  <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <HashnodeIcon />
                  </span>
                  Hashnode
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <div className="text-xs text-primary-darkGrey">Link</div>
          <div className="relative">
            <Input
              placeholder="https://www.github.com/benwright"
              className="w-full rounded-lg h-[48px] pl-10 focus-visible:ring-0 focus-visible:ring-inset-0 hover:border-primary-violet hover:ring-offset-0 hover:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)] transition ease-in-out duration-300"
            />
            <LinkIconSmall className="absolute top-[16px] left-[15px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkCustomizationCard;
