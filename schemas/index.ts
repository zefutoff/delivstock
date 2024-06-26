import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(12, {
    message: "Minimum 12 cartactères requis",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "L'email est requis",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "L'email est requis",
  }),
  password: z.string().min(1, {
    message: "Un mot de passe est requis",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "L'email est requis",
  }),
  password: z.string().min(12, {
    message: "Minimum 12 cartactères requis",
  }),
  name: z.string().min(3, {
    message: "Un nom est requis",
  }),
});

export const NewInventorySchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      quantity: z.number(),
      name: z.string(),
    })
  )
})


export const NewProductSchema = z.object({
  name: z.string().min(3, {
    message: "Minimum 3 caractères",
  }),
  selectedOption: z.enum(["all", "vegetarian", "pescitarian", "flexitarian"]),
});

export const KitProductSchema = z.array(
  z.object({
    id: z.string(),
    quantity: z.number(),
    name: z.string(),
  })
);
