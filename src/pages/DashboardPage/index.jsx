import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const DashboardPage = ({ user, userLogout }) => {
    return (
        <>
            <div className={styles.dashboard}>
                <header className={`${styles.header} container`}>
                    <img src={logo} alt="Logo Kenzie Hub" />
                    <button onClick={userLogout}>Sair</button>
                </header>

                <div className={styles.line}>
                    <section className={`${styles.nameContainer} container`}>
                        <h1>Olá, {user?.name}</h1>
                        <span>{user?.course_module}</span>
                    </section>
                </div>

                <section className={`${styles.post} container`}>
                    <h2 className="title">Que pena! Estamos em desenvolvimento:( </h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidade</p>
                </section>

            </div>
        </>
    )
}