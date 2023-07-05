import { z } from "zod";

export const categoryEnum = z.enum([
  "Geral",
  "Familiar",
  "Amigo",
  "Colega",
  "Fornecedor",
  "Cliente",
]);

export const contactSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(6, "O nome deve ter no mínimo 6 caracteres")
    .max(60, "O nome deve ter no máximo 60 caracteres")
    .nonempty("O nome é obrigatória"),
  email: z
    .string()
    .email("O campo deve ser um e-mail")
    .min(10, "O e-mail deve ter no mínimo 10 caracteres")
    .max(45, "O e-mail deve ter no máxio 45 caracteres")
    .nonempty("O e-mail é obrigatório"),
  phone: z
    .string()
    .min(9, "O telefone deve ter no mínimo 09 dígitos")
    .max(45, "O telefone deve ter no máxio 13 dígitos")
    .nonempty("Campo obrigatório"),
  comment: z.string().nullable().nullish(),
  isFavorite: z.boolean().nullable(),
  category: categoryEnum,
  createdAt: z.string(),
});

export const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  category: true,
  isFavorite: true,
});

export const contactUpdateCategory = contactSchema.pick({
  category: true,
});

export const contactUpdateSchema = contactSchema
  .omit({
    id: true,
    createdAt: true,
    email: true,
  })
  .extend({
    email: z.string().nullable(),
  })
  .partial();
