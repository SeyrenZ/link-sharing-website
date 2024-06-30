import Navbar from "@/components/navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <Navbar />
      {children}
    </div>
  );
}
