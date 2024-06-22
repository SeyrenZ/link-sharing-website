import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument_Sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link sharing app",
  description: "Link sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrument_Sans.className}>{children}</body>
    </html>
  );
}
