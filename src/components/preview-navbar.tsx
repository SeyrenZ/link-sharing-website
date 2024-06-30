"use client";
import React from "react";
import Link from "next/link";

const PreviewNavbar = () => {
  return (
    <div className="z-50 fixed w-full p-6">
      <div className="w-full max-w-[1392px] mx-auto">
        <div className="w-full h-[78px] px-6 py-4 bg-white rounded-lg flex items-center justify-between">
          <Link
            href="/profile"
            className="w-fit px-[27px] py-[11px] border-[1px] border-primary-violet hover:bg-primary-lightPurple rounded-lg text-primary-violet font-semibold text-[16px] leading-[150%] transition ease-in-out duration-300"
          >
            Back to Editor
          </Link>
          <button className="w-fit px-[27px] py-[11px] bg-primary-violet hover:bg-primary-pastelPurple rounded-lg text-white font-semibold text-[16px] leading-[150%] transition ease-in-out duration-300">
            Share Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewNavbar;
