"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  //   useEffect(() => {
  //     // If the session is not loaded yet, do nothing
  //     // If the session is loaded and there's no user, redirect to login
  //     if (status === "unauthenticated") {
  //       router.push("/login");
  //     }
  //   }, [session, status, router]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Profile;
