"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonPropos {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonPropos) => {
  return (
    <Button variant="default" className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
