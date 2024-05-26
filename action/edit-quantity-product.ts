"use server";

import db from "@/lib/prisma";
import { NewInventorySchema } from "@/schemas";
import * as z from "zod";

export const addInventory = async (
  values: z.infer<typeof NewInventorySchema>
) => {
  const validatedFields = NewInventorySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Champs invalide !" };
  }

  const inventoryItems = validatedFields.data.items;

  try {
    for (const item of inventoryItems) {
      const { id, quantity } = item;

      const product = await db.products.findUnique({
        where: { id },
      });

      if (!product) {
        return { error: `Produit avec l'ID ${id} n'existe pas` };
      }

      await db.products.update({
        where: { id },
        data: {
          quantity: quantity,
        },
      });
    }

    return { success: "Inventaire est enregistré avec succès !" };
  } catch (error) {
    return {
      error:
        "Une erreur est survenue lors de l'enregistrement de l'inventaire.",
    };
  }
};
