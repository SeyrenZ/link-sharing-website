"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the session is not loaded yet, do nothing
    // If the session is loaded and there's no user, redirect to login
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
