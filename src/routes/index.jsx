import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PrivateRoutes } from "./PrivateRoutes";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes />} >
                <Route path="/dashboard"
                    element={<DashboardPage />}
                />
            </Route>
        </Routes>
    )
}