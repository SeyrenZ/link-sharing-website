"use client";
import React, { useState } from "react";
import { LinkCustomizationProps } from "./svgs";
import LinkCustomizationCard from "./link-customization-card";
import { useLinks } from "@/context/link-state";
import { Reorder } from "framer-motion";

const LinkCustomization = () => {
  const { links, setLinks, removeLink, addLink } = useLinks();

  const handleAddLink = () => {
    addLink({ timestamp: Date.now(), name: "", platform: "github", url: "" }); // Replace "DefaultPlatform" with the appropriate value or logic
  };

  interface LinksData {
    [key: `data${number}`]: string; // This allows any key that matches the pattern `data1`, `data2`, etc., with string values
  }
  
  const handleSave = async () => {
    const linksData = links.reduce<LinksData>((acc, link, index) => {
      acc[`data${index + 1}`] = link.url; // Now TypeScript knows what kind of keys and values acc can have
      return acc;
    }, {});
  
    try {
      const response = await fetch('localhost:3000/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ links: linksData }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Success:', data);
      // Handle success, maybe clear links or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle error, maybe show an error message
    }
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
                <Reorder.Item
                  key={link.timestamp}
                  value={link}
                  className="w-full"
                >
                  <LinkCustomizationCard index={index} />
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
      <div className="w-full h-[94px] pl-6 py-6 flex justify-end items-end">
        <button
        onClick={handleSave}
          disabled={true}
          className="w-fit px-[27px] py-[11px] bg-primary-violet hover:bg-primary-pastelPurple rounded-lg text-white text-[16px] leading-[150%] font-semibold transition ease-in-out duration-300 disabled:bg-primary-pastelPurple disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkCustomization;
