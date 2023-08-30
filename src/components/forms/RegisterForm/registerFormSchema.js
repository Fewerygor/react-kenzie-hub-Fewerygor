import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z
        .string()
        .nonempty("E-mail é obrigatório")
        .email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "É necessário pelo menos oito caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/, "É necessário pelo menos um caracter especial."),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
    bio: z.string().nonempty("Bio é obrigatória"),
    contact: z.string().nonempty("E-mail de contato é obrigatório"),
    course_module: z
        .string()
        .nonempty("Selecione um módulo"),
}).refine(({ password, confirmPassword }) => password == confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
});

