"use client";
import React, { useState, useEffect } from "react";
import { useLinks } from "@/context/link-state";
import { ArrowRight, GithubIcon } from "./svgs";
import { platformsValidation } from "../../public/data/platform-data";
import Link from "next/link";

const Preview = () => {
  const { links, profileDetails } = useLinks();

  return (
    <div className="w-full max-w-[1440px] mx-auto pt-[208px] flex items-center justify-center">
      <div className="z-10 relative w-full max-w-[349px] min-h-[569px] px-14 py-12 bg-white rounded-[30px] shadow-xl flex flex-col items-center gap-y-14">
        <div className="w-full flex flex-col items-center gap-y-[25px]">
          <div className="w-[104px] h-[104px] rounded-full border-[3px] border-primary-violet bg-placeholderImage bg-cover" />
          <div className="w-full h-auto flex flex-col bg-white items-center justify-center gap-y-2 ">
            <div className="text-[28px] text-primary-darkGrey font-bold">
              {profileDetails.userName} {profileDetails.lastName}
            </div>
            <div className="text-[16px] text-primary-darkGrey">
              {profileDetails.email}
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
              <div key={index}>
                <Link
                  href={link.url}
                  target="_blank"
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
