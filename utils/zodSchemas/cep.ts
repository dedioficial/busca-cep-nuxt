import { z } from "zod";

const pattern = /[0-9]{5}\-[0-9]{3}/;

export const cepSchema = z.object({
  cep: z
    .string({ message: "Obrigatório." })
    .trim()
    .nonempty({ message: "Digite o CEP." })
    .refine((val) => pattern.test(val), { message: "Incompleto." }),
});
