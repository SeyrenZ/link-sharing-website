"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ProfileMockup from "@/components/profile-mockup";
import LinkCustomization from "@/components/link-customization";
import { useProfile } from "@/context/profile-state";
import ProfileDetails from "@/components/profile-details";

const Profile = () => {
  const { isButtonClicked } = useProfile();
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
        {isButtonClicked ? <ProfileDetails /> : <LinkCustomization />}
      </div>
    </div>
  );
};

export default Profile;
