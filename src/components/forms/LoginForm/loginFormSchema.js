import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .nonempty("O e-mail é obrigatório")
        .email("Forneça um e-mail válido"),
    password: z.string().nonempty("A senha é obrigatória"),
});