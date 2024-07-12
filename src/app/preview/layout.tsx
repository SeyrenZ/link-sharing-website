import PreviewNavbar from "@/components/preview-navbar";
import React, { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <PreviewNavbar />
      {children}
    </Suspense>
  );
}
