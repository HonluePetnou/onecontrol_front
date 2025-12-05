import { z } from "zod";

export const registerSchema = z.object({
  name: z.preprocess((val) => (typeof val === "string" ? val.trim() : val), z.string().min(2, "Le nom doit contenir au moins 2 caractères")),
  email: z.preprocess((val) => (typeof val === "string" ? val.trim().toLowerCase() : val), z.string().email("Email invalide")),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export const loginSchema = z.object({
  email: z.preprocess((val) => (typeof val === "string" ? val.trim().toLowerCase() : val), z.string().email("Email invalide")),
  password: z.string().min(8, "Mot de passe invalide"),
});

export default { registerSchema, loginSchema };
