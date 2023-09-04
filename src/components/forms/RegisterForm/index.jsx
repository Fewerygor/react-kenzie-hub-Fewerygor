import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/userContext";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const { userRegister, loading } = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
            <h2>Crie sua conta</h2>

            <p>Rapido e grátis, vamos nessa</p>

            <Input
                type="text"
                label="Nome"
                placeholder="Digite aqui seu nome"
                {...register("name")}
                error={errors.name}
                disabled={loading}
            />

            <Input
                type="email"
                label="Email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <InputPassword
                label="Senha"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <InputPassword
                label="Confirmar Senha"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading}
            />

            <Input
                type="text"
                label="Bio"
                placeholder="Fale sobre você"
                {...register("bio")}
                error={errors.bio}
                disabled={loading}
            />

            <Input
                type="text"
                label="Contato"
                placeholder="Opção de contato"
                {...register("contact")}
                error={errors.contact}
                disabled={loading}
            />

            <label htmlFor="select">Selecionar módulo</label>
            <select name="select" id="select" {...register("course_module")} disabled={loading}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
            </select>

            <Link
                className={styles.link}
                to="/" disabled={loading}>
                Voltar
            </Link>
            <button className={styles.button} type="submit">{loading ? "Cadastrando..." : "Cadastrar"}</button>
        </form>
    )
}