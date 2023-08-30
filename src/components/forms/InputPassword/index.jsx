import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden]  = useState(true);

    return (
        <div className={styles.inputBox}>
            <label>{label}</label>
            <input
                type={isHidden ? "password" : "text"}
                ref={ref}
                {...rest}
            />
            {error ? <p className={styles.paragraph}>{error.message}</p> : null}
            <button type="button" onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
        </div>
    )
});