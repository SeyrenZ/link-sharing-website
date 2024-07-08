"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GithubIcon, LinkIconSmall, LinkProps } from "./svgs";
import { Input } from "./ui/input";
import { useLinks } from "@/context/link-state";
import { platforms } from "../../public/data/platform-data";

interface LinkCustomizationCardProps {
  index: number;
}

const LinkCustomizationCard: React.FC<LinkCustomizationCardProps> = ({
  index,
}) => {
  const { links, removeLink, updateLinkPlatform } = useLinks();

  return (
    <>
      <div className="w-full h-full p-5 flex flex-col gap-y-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-primary-grey font-bold text-[16px] leading-[150%]">
            <LinkProps />
            Link #{index + 1}
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
          {/* <Select onValueChange={setSelectedPlatform}> */}
          <Select onValueChange={(platform) => updateLinkPlatform(index, platform)}>
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
              {platforms.map((platform, index) => (
                <SelectItem
                  key={index}
                  className="group cursor-pointer"
                  value={platform.value}
                >
                  <div className="flex items-center gap-x-3 text-[16px] leading-[150%] text-primary-darkGrey group-hover:text-primary-violet transition ease-in-out duration-300">
                    <span className="text-primary-grey group-hover:text-primary-violet transition ease-in-out duration-300">
                      {platform.icon}
                    </span>
                    {platform.name}
                  </div>
                </SelectItem>
              ))}
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
