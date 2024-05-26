"use server";

import db from "@/lib/prisma";
import { KitTab } from "@/components/kit-tab";

const getProducts = async (typeNames: string[]) => {
  return await db.products.findMany({
    where: {
      OR: typeNames.map((typeName) => ({ type: { typeName } })),
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const fetchKitData = async () => {
  const vegProducts = await getProducts(["all", "vegetarian"]);
  const pesceProducts = await getProducts(["all", "pescitarian"]);
  const flexiProducts = await getProducts(["all", "flexitarian"]);

  return {
    vege: vegProducts,
    pesce: pesceProducts,
    flexi: flexiProducts,
  };
};
