import { auth } from "@/auth";
import db from "@/lib/prisma";
import { KitProductSchema } from "@/schemas";
import { z } from "zod";

export const POST = auth(async (req) => {
  const user = req.auth?.user;

  if (!user) {
    return new Response(
      JSON.stringify({
        message:
          "Vous devez être connecté pour pouvoir effectuer cette action.",
        status: "error",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: any, values: z.infer<typeof KitProductSchema>;

  try {
    body = await req.json();
    values = KitProductSchema.parse(body);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Les données envoyées sont incorrectes.",
        status: "error",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    await db?.$transaction(async (tx) => {
      for (const product of values) {
        await tx.products.update({
          where: { id: product.id },
          data: { quantity: { decrement: product.quantity } },
        });
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Une erreur est survenue lors de la validation du kit.",
        status: "error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Le kit a bien été validé.",
      status: "success",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
});
