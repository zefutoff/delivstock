"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateProductType(page: string) {
  revalidateTag(page);
  return;
}
