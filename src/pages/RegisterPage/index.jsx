import { RegisterForm } from "../../components/forms/RegisterForm";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <>
            <div className={styles.registerContainer}>
                <header>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </header>
                <RegisterForm />
            </div>
        </>
    )
};