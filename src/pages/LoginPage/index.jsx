import { LoginForm } from "../../components/forms/LoginForm";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const LoginPage = ({ setUser }) => {
    return (
        <>
            <div className={styles.loginContainer}>
                <header>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </header>
                <LoginForm setUser={setUser} />
            </div>
        </>
    )
};