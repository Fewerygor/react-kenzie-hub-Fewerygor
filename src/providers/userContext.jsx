import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");

        const getProfile = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token},`
                    },
                });
                setUser(data);
            } catch (error) {
                console.log(error);
                localStorage.removeItem("@TOKEN");
            } finally {
                setLoading(false);
            }

            if (token) {
                getProfile();
            }
        }
    }, []);

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            await api.post('/users', formData);
            navigate("/");
            toast.success("Conta criada com sucesso!")
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Email already exists") {
                toast.error("Ops! Algo deu errado");
            }
        } finally {
            setLoading(false);
        }
    };

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

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ user, loading, userRegister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
};