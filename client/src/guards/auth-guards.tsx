import { Navigate } from "react-router-dom";
import { PublicRoutes } from "../routes";
// import { useAuth } from "../context";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-white">
  //       <div className="text-center">
  //         <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A1A1A] mb-4"></div>
  //         <p className="text-gray-600">Cargando...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!user) {
  //   return <Navigate to={PublicRoutes.AUTH} replace />;
  // }

  return <>{children}</>;
};
