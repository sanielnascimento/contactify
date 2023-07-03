import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(6, "Seu nome deve ter no mínimo 6 caracteres")
      .max(60, "Seu nome deve ter no máximo 60 caracteres")
      .nonempty("Seu nome é obrigatória"),
    email: z
      .string()
      .email("O campo deve ser um e-mail")
      .min(10)
      .max(45, "O e-mail deve ter no máxio 45 caracteres")
      .nonempty("O e-mail é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres"),
    phone: z.preprocess((x) => Number(x), z.number()),
    imgUrl: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser identicas",
    path: ["confirmpassword"],
  });
