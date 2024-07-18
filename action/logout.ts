"use server";

import { signOut } from "@/auth";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export const logout = async () => {
  await signOut({
    redirect: true,
    redirectTo: `/`,
  });
};
