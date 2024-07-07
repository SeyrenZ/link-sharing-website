"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { LinkIcon, Logo2, ProfileIcon } from "./svgs";
import Link from "next/link";
import { useProfile } from "@/context/profile-state";

const Navbar = () => {
  const { setIsButtonClicked, isButtonClicked } = useProfile();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="w-full p-6">
      <div className="w-full max-w-[1392px] mx-auto">
        <div className="w-full h-[78px] px-6 py-4 bg-white rounded-lg flex items-center justify-between">
          <div onClick={handleLogout} className="hover:cursor-pointer">
            <Logo2 />
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setIsButtonClicked(false)}
              className={`group w-fit px-[27px] py-[11px] flex items-center gap-x-2 text-primary-grey hover:text-primary-violet font-semibold text-[16px] leading-[150%] transition ease-in-out duration-300 rounded-lg ${
                !isButtonClicked &&
                "text-primary-violet bg-primary-lightPurple "
              }`}
            >
              <LinkIcon className="group-hover:text-primary-violet" />
              Links
            </button>
            <button
              onClick={() => setIsButtonClicked(true)}
              className={`group w-fit px-[27px] py-[11px] flex items-center gap-x-2 text-primary-grey hover:text-primary-violet font-semibold text-[16px] leading-[150%] transition ease-in-out duration-300 rounded-lg ${
                isButtonClicked && "text-primary-violet bg-primary-lightPurple "
              }`}
            >
              <ProfileIcon className="group-hover:text-primary-violet" />
              Profile Details
            </button>
          </div>
          <Link
            href="/preview"
            className="w-fit px-[27px] py-[11px] border-[1px] border-primary-violet hover:bg-primary-lightPurple rounded-lg text-primary-violet font-semibold text-[16px] leading-[150%] transition ease-in-out duration-300"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
