import { z } from "zod";

const string = z
  .string({ message: "Obrigatório." })
  .trim()
  .min(3, { message: "Digite no mínimo três caracteres." });

export const addressSchema = z.object({
  estado: z
    .string({ message: "Obrigatório." })
    .trim()
    .nonempty({ message: "Selecione o estado." }),

  localidade: string,

  logradouro: string,
});
