"use server";

import { getProductTypeByName } from "@/data/product";
import db from "@/lib/prisma";
import { NewProductSchema } from "@/schemas";
import * as z from "zod";

export const addProduct = async (values: z.infer<typeof NewProductSchema>) => {
  const validatedFields = NewProductSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Champs invalide !" };
  }

  const { name, selectedOption } = validatedFields.data;

  const productType = await db.productType.findFirst({
    where: {
      typeName: selectedOption,
    },
  });

  console.log(1);

  if (!productType) {
    return { error: "Type de produit invalide !" };
  }

  console.log(2);

  const existingProductType = await getProductTypeByName(name);

  if (existingProductType) {
    return { error: "Ce type de produit existe déjà" };
  }

  console.log(3);

  await db.products.create({
    data: {
      productName: name,
      quantity: 0,
      type: { connect: { typeId: productType.typeId } },
    },
  });

  return { success: "Catégorie ajoutée avec succès !" };
};
