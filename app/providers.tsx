"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
