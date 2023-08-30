import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { useState } from "react";

export const RoutesMain = () => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    };

    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard"
                element={<DashboardPage user={user} userLogout={userLogout} />}
            />
        </Routes>
    )
}