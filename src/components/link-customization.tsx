"use client";
import React, { useState } from "react";
import { LinkCustomizationProps } from "./svgs";
import LinkCustomizationCard from "./link-customization-card";

const LinkCustomization = () => {
  const [isAddLink, setIsAddLink] = useState(false);
  const handleAddLink = () => {
    setIsAddLink(true);
  };

  return (
    <div className="w-full max-w-[808px] h-[834px] px-10 pt-10 rounded-xl bg-white flex flex-col gap-y-10 relative">
      <div className="w-full flex flex-col gap-y-2">
        <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
          Customize your links
        </div>
        <div className="text-[16px] leading-[150%] font-normal text-primary-grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-6">
        <button
          onClick={handleAddLink}
          className="w-full py-[11px] rounded-lg border-[1px] border-primary-violet hover:bg-primary-lightPurple text-[16px] leading-[150%] font-semibold text-primary-violet  flex items-center justify-center transition ease-in-out duration-300 "
        >
          + Add new link
        </button>
        <div className="w-full h-auto bg-primary-brokenWhite rounded-xl flex items-center justify-center">
          {isAddLink ? (
            <LinkCustomizationCard />
          ) : (
            <div className="w-full py-[62px] max-w-[488px] flex flex-col items-center gap-y-6">
              <LinkCustomizationProps />
              <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
                Let&apos;s get you started
              </div>
              <div className="text-[16px] leading-[150%] text-primary-grey text-center">
                Use the “Add new link” button to get started. Once you have
                <br /> more than one link, you can reorder and edit them. We’re
                here to help you share your profiles with everyone!
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        disabled={true}
        className="absolute bottom-[24px] right-10 w-fit px-[27px] py-[11px] bg-primary-violet hover:bg-primary-pastelPurple rounded-lg text-white text-[16px] leading-[150%] font-semibold transition ease-in-out duration-300 disabled:bg-primary-pastelPurple disabled:cursor-not-allowed"
      >
        Save
      </button>
    </div>
  );
};

export default LinkCustomization;
