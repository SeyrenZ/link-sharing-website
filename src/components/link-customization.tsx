"use client";
import React, { useEffect } from "react";
import { LinkCustomizationProps } from "./svgs";
import LinkCustomizationCard from "./link-customization-card";
import { useLinks } from "@/context/link-state";
import { Reorder } from "framer-motion";

const LinkCustomization = () => {
  const { links, setLinks, addLink } = useLinks();

  const handleAddLink = () => {
    addLink({
      id: "",
      name: "",
      platform: "github",
      url: "",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-y-2">
        <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
          Customize your links
        </div>
        <div className="text-[16px] leading-[150%] font-normal text-primary-grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </div>
      </div>
      <button
        onClick={handleAddLink}
        className="w-full py-[11px] rounded-lg border-[1px] border-primary-violet hover:bg-primary-lightPurple text-[16px] leading-[150%] font-semibold text-primary-violet  flex items-center justify-center transition ease-in-out duration-300 "
      >
        + Add new link
      </button>
      <div
        className={`w-full h-full flex flex-col gap-y-6 ${
          links.length > 0 ? "overflow-y-scroll" : "overflow-hidden"
        }`}
      >
        <div className="w-full">
          {links.length > 0 ? (
            <Reorder.Group
              axis="y"
              onReorder={setLinks}
              values={links}
              className="flex flex-col gap-y-6"
            >
              {links.map((link, index) => (
                <Reorder.Item key={link.id} value={link} className="w-full">
                  <LinkCustomizationCard index={index} id={link.id} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          ) : (
            <div className="w-full h-auto bg-primary-brokenWhite rounded-xl flex flex-col items-center justify-center">
              <div className="w-full py-[62px] max-w-[488px] flex flex-col items-center gap-y-6">
                <LinkCustomizationProps />
                <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
                  Let&apos;s get you started
                </div>
                <div className="text-[16px] leading-[150%] text-primary-grey text-center">
                  Use the “Add new link” button to get started. Once you have
                  <br /> more than one link, you can reorder and edit them.
                  We’re here to help you share your profiles with everyone!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LinkCustomization;
