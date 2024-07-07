import Navbar from "@/components/navbar";
import { ProfileProvider } from "@/context/profile-state";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <ProfileProvider>
        <Navbar />
        {children}
      </ProfileProvider>
    </div>
  );
}
