import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../InputPassword";
import { useContext } from "react";
import styles from "./style.module.scss"
import { UserContext } from "../../../providers/userContext";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const { userLogin, loading } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>

            <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <InputPassword
                label="Senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />

            <button className={styles.button}>{loading ? "Logando..." : "Entrar"}</button>

            <div className={styles.linkBox}>
                <p>Ainda não possui uma conta?</p>

                <Link
                    className={styles.link}
                    label="Ainda não possui uma conta?"
                    to="/register"
                    disabled={loading}
                >
                    Cadastre-se
                </Link>
            </div>
        </form>
    )
}