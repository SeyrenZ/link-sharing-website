import PreviewNavbar from "@/components/preview-navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <PreviewNavbar />
      {children}
    </div>
  );
}
