"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateProductType() {
  revalidateTag("stock/");
  return;
}
