import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/session-provider";
import "./globals.css";
import { LinkProvider } from "@/context/link-state";

const instrument_Sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link sharing app",
  description: "Link sharing app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <LinkProvider>
        <body className={instrument_Sans.className}>
          <SessionProvider>{children}</SessionProvider>
        </body>
      </LinkProvider>
    </html>
  );
}
