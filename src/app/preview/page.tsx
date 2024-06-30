"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import Preview from "@/components/preview";

const PreviewPage = () => {
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
    <div className="w-full relative">
      <div className="z-0 absolute inset-0 w-full h-[357px] bg-primary-violet rounded-b-[30px]" />
      <Preview />
    </div>
  );
};

export default PreviewPage;
