import { Providers } from "@/app/providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="h-h-full w-full flex flex-col gap-y-10 items-center justify-center">
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
