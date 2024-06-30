"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import ProfileMockup from "@/components/profile-mockup";
import LinkCustomization from "@/components/link-customization";

const Profile = () => {
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
        <LinkCustomization />
      </div>
    </div>
  );
};

export default Profile;
