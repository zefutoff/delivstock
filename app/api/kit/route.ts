import { auth } from "@/auth";
import db from "@/lib/prisma";
import { KitProductSchema } from "@/schemas";
import { z } from "zod";

export const POST = auth(async (req) => {
  const user = req.auth?.user;

  if (!user) {
    return Response.json(
      {
        message:
          "Vous devez être connecté pour pouvoir effectuer cette action.",
        status: "error",
      },
      { status: 401 }
    );
  }

  let body: any, values: z.infer<typeof KitProductSchema>;

  try {
    body = await req.json();
    values = KitProductSchema.parse(body);
  } catch (error) {
    return Response.json(
      {
        message: "Les données envoyées sont incorrectes.",
        status: "error",
      },
      { status: 400 }
    );
  }

  try {
    await db?.$transaction(async (tx) => {
      console.log(values);
      for (const product of values) {
        await tx.products.update({
          where: { id: product.id },
          data: { quantity: { decrement: product.quantity } },
        });
      }
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        message: "Une erreur est survenue lors de la validation du kit.",
        status: "error",
      },
      { status: 500 }
    );
  }

  return Response.json(
    {
      message: "Le kit a bien été validé.",
      status: "success",
    },
    { status: 200 }
  );
});
