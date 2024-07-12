import Navbar from "@/components/navbar";
import { ProfileProvider } from "@/context/profile-state";
import React, { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <ProfileProvider>
        <Navbar />
        {children}
      </ProfileProvider>
    </Suspense>
  );
}
