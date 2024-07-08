import React from "react";
import { useLinks } from "@/context/link-state";
import { ArrowRight, GithubIcon } from "./svgs";
import { platformsValidation } from "../../public/data/platform-data";
import { Reorder } from "framer-motion";

const ProfileMockup = () => {
  const { links, setLinks } = useLinks();

  // Moved getPlatformInfo call inside the map function

  return (
    <div className="w-full max-w-[560px] h-[834px] rounded-xl bg-white flex items-center justify-center">
      <div className="w-full max-w-[307px] h-[632px] bg-profileMockup relative">
        <Reorder.Group
          axis="y"
          onReorder={setLinks}
          values={links}
          className="w-[237px] h-[300px] rounded-lg flex flex-col gap-y-5 absolute bottom-[54px] left-0 right-0 mx-auto overflow-hidden"
        >
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
              <Reorder.Item key={link.timestamp} value={link}>
                <div
                  className={`w-full h-[44px] px-4 py-[14px] bg-black rounded-lg flex items-center justify-between ${
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
                </div>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default ProfileMockup;
