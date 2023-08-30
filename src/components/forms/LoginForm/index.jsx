import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../InputPassword";
import { api } from "../../../services/api";
import { useState } from "react";
import styles from "./style.module.scss"

export const LoginForm = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        };
    };

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