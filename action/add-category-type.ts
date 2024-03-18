"use server";

import { getProductTypeByName } from "@/data/product";
import db from "@/lib/prisma";
import { NewProductTypeSchema } from "@/schemas";
import * as z from "zod";

export const addCategoryType = async (
  values: z.infer<typeof NewProductTypeSchema>
) => {
  const validatedFields = NewProductTypeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Champs invalide !" };
  }

  const { name } = validatedFields.data;

  const existingProductType = await getProductTypeByName(name);

  if (existingProductType) {
    return { error: "Ce type de produit existe déjà" };
  }

  await db.productType.create({
    data: {
      typeName: name,
    },
  });

  return { success: "Catégorie ajoutée avec succés !" };
};
