import { useSelector } from "react-redux";
import { AppStore } from "../redux/store/store";
import { Navigate } from "react-router-dom";
import { PublicRoutes } from "../models";
import { Outlet } from "react-router-dom";

export const AuthGuard = () => {
    const user = useSelector((state: AppStore) => state.user);
    const isAuthenticated = user && user.email && user.email.trim() !== "";

    if (!isAuthenticated) {
        return <Navigate to={PublicRoutes.AUTH} replace />;
    }

    return <Outlet />;
}
