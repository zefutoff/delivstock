import type { Metadata } from "next";
import { auth } from "@/auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Toaster />
        <body className="">{children}</body>
      </html>
    </SessionProvider>
  );
}
