import React from "react";
import { useLinks } from "@/context/link-state";
import { ArrowRight, GithubIcon } from "./svgs";
import { platformsValidation } from "../../public/data/platform-data";
import Link from "next/link";

const Preview = () => {
  const { links } = useLinks();

  return (
    <div className="w-full max-w-[1440px] mx-auto pt-[208px] flex items-center justify-center">
      <div className="z-10 relative w-full max-w-[349px] min-h-[569px] px-14 py-12 bg-white rounded-[30px] shadow-xl flex flex-col items-center gap-y-14">
        <div className="w-full flex flex-col items-center gap-y-[25px]">
          <div className="w-[104px] h-[104px] rounded-full border-[3px] border-primary-violet bg-placeholderImage bg-cover" />
          <div className="flex flex-col items-center gap-y-2">
            <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
              Ben wright
            </div>
            <div className="text-[16px] leading-[150%] text-primary-grey">
              Ben@gmail.com
            </div>
          </div>
        </div>
        <div className="w-[237px] h-auto rounded-lg flex flex-col gap-y-5 mx-auto overflow-hidden">
          {links.map((link, index) => {
            // Call getPlatformInfo here where 'link' is defined
            const platformInfo = platformsValidation[link.platform] || {};
            const {
              text: text = "#ffffff",
              color: backgroundColor = "#333",
              name: platformName = "GitHub",
              icon: platformIcon = <GithubIcon />,
            } = platformInfo;

            const uniquePlatform =
              link.platform === "frontendmentor" ? "#333333" : "#ffffff";

            return (
              <div key={link.timestamp}>
                <Link
                  href={link.url}
                  className={`w-full h-[56px] px-4 py-[14px] bg-black rounded-lg flex items-center justify-between ${
                    uniquePlatform ? "border-[1px]" : ""
                  }`}
                  style={{ backgroundColor: backgroundColor }}
                >
                  <div className="flex gap-x-2">
                    <div className="text-white">{platformIcon}</div>
                    <div
                      className="text-xs leading-[150%]"
                      style={{ color: text }}
                    >
                      {platformName}
                    </div>
                  </div>
                  <ArrowRight style={{ color: uniquePlatform }} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
