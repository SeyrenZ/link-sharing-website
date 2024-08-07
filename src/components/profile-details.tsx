"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImageIcon } from "./svgs";
import { Input } from "./ui/input";
import { useLinks } from "@/context/link-state";
import { string } from "zod";

const ProfileDetails = () => {
  const { profileDetails, updateProfileDetails } = useLinks();

  const profile = profileDetails || {
    userName: string,
    lastName: string,
    email: string,
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileDetails({ ...profile, userName: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileDetails({ ...profile, lastName: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileDetails({ ...profile, email: e.target.value });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-y-2">
        <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
          Profile Details
        </div>
        <div className="text-[16px] leading-[150%] font-normal text-primary-grey">
          Add your details to create a personal touch to your profile
        </div>
      </div>
      <div className="w-full h-[233px] p-5 bg-primary-brokenWhite rounded-xl flex items-center gap-x-4">
        <div className="w-[240px] text-[16px] leading-[150%] text-primary-grey">
          Profile picture
        </div>
        <div className="w-[193px] h-full bg-primary-lightPurple rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-y-2.5">
            <ImageIcon />
            <div className="text-[16px] leading-[150%] text-primary-violet font-bold">
              + Upload Image
            </div>
          </div>
        </div>
        <div className="w-full max-w-[217px] text-[12px] leading-[150%] text-primary-grey text-left">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </div>
      </div>
      <div className="w-full h-auto p-5 bg-primary-brokenWhite rounded-xl flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <div className="w-full max-w-[240px] text-[16px] leading-[150%] text-primary-grey">
            First name*
          </div>
          <Input
            value={profile.userName}
            onChange={handleFirstNameChange}
            placeholder="e.g. John"
            className="w-full rounded-lg h-[48px] focus-visible:ring-0 focus-visible:ring-inset-0 hover:border-primary-violet hover:ring-offset-0 hover:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)] transition ease-in-out duration-300"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-full max-w-[240px] text-[16px] leading-[150%] text-primary-grey">
            Last name*
          </div>
          <Input
            value={profile.lastName}
            onChange={handleLastNameChange}
            placeholder="e.g. Appleseed"
            className="w-full rounded-lg h-[48px] focus-visible:ring-0 focus-visible:ring-inset-0 hover:border-primary-violet hover:ring-offset-0 hover:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)] transition ease-in-out duration-300"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-full max-w-[240px] text-[16px] leading-[150%] text-primary-grey">
            Email
          </div>
          <Input
            value={profile.email}
            onChange={handleEmailChange}
            placeholder="e.g. email@example.com"
            className="w-full rounded-lg h-[48px] focus-visible:ring-0 focus-visible:ring-inset-0 hover:border-primary-violet hover:ring-offset-0 hover:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)] transition ease-in-out duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
