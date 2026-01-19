// src/guards/AuthGuard.tsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes } from "../routes";
import { RootState } from "../redux/store"; // Asegúrate de tener este tipo en tu store

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A1A1A] mb-4"></div>
          <p className="text-gray-600">Cargando sesión...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={PublicRoutes.AUTH} replace />;
  }

  return <>{children}</>;
};
