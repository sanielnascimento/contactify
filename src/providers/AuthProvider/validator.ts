import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
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
  phone: z.preprocess((x) => Number(x), z.number()),
  imgUrl: z.string().nonempty("Forneça uma Url de imagem"),
  createdAt: z.string(),
});

export const registerSchema = clientSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres"),
  });

export const clientUpdatePhoto = z.object({
  imgUrl: z.string(),
}).partial();

export const clientUpdateSchema = clientSchema
  .omit({
    id: true,
    createdAt: true,
    email: true,
  })
  .extend({
    email: z.string().nullable(),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres").nullable().nullish(),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(15, "A senha deve ter no máximo 15 caracteres").nullable().nullish(),
  })
  .partial();
