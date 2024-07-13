"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ProfileMockup from "@/components/profile-mockup";
import LinkCustomization from "@/components/link-customization";
import { useProfile } from "@/context/profile-state";
import ProfileDetails from "@/components/profile-details";
import { useLinks } from "@/context/link-state";

const Profile = () => {
  const { isButtonClicked } = useProfile();
  const { handleSave } = useLinks();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the session is not loaded yet, do nothing
    // If the session is loaded and there's no user, redirect to login
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  return (
    <div className="w-full">
      <div className="w-full max-w-[1390px] mx-auto flex items-center justify-between">
        <ProfileMockup />
        <div className="w-full max-w-[808px] h-[834px] px-10 pt-10 rounded-xl bg-white flex flex-col gap-y-10 relative">
          {isButtonClicked ? <ProfileDetails /> : <LinkCustomization />}
          <div className="w-full h-[94px] pl-6 py-6 flex justify-end items-end">
            <button
              onClick={handleSave}
              className="w-fit px-[27px] py-[11px] bg-primary-violet hover:bg-primary-pastelPurple rounded-lg text-white text-[16px] leading-[150%] font-semibold transition ease-in-out duration-300 disabled:bg-primary-pastelPurple disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
