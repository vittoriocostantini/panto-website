import { useState } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import reviewImage from "../../../assets/reviews/review-5.jpeg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../redux/slice/user";
import { loginUser, registerUser } from "../../../services/api/auth-service";
import { PublicRoutes } from "../../../models";

function AuthUser() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      try {
        let user;
        if (isLogin) {
          user = await loginUser({ email, password });
        } else {
          user = await registerUser({ email, password, confirmPassword });
        }
        dispatch(createUser({ ...user }));
        navigate(PublicRoutes.HOME, { replace: true });
      } catch (error) {
        alert(error instanceof Error ? error.message : "Ocurrió un error");
      } finally {
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="h-screen bg-white flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
              {isLogin ? "Bienvenido" : "Crear Cuenta"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Inicia sesión para continuar"
                : "Regístrate para comenzar"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Email sx={{ color: "#9CA3AF", fontSize: 20 }} />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock sx={{ color: "#9CA3AF", fontSize: 20 }} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: 20 }} />
                  ) : (
                    <Visibility sx={{ fontSize: 20 }} />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock sx={{ color: "#9CA3AF", fontSize: 20 }} />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <VisibilityOff sx={{ fontSize: 20 }} />
                    ) : (
                      <Visibility sx={{ fontSize: 20 }} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1A1A1A] border-gray-300 rounded focus:ring-[#1A1A1A]"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Recordar contraseña
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-[#1A1A1A] hover:text-[#323131] font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#323131] transition-colors font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? isLogin
                  ? "Iniciando sesión..."
                  : "Creando cuenta..."
                : isLogin
                ? "Iniciar Sesión"
                : "Registrarse"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? (
                  <>
                    ¿No tienes una cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLogin(false);
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                      }}
                      className="text-[#1A1A1A] hover:text-[#323131] font-semibold"
                    >
                      Regístrate aquí
                    </button>
                  </>
                ) : (
                  <>
                    ¿Ya tienes una cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLogin(true);
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                      }}
                      className="text-[#1A1A1A] hover:text-[#323131] font-semibold"
                    >
                      Inicia sesión aquí
                    </button>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="h-full w-full">
          <img
            src={reviewImage}
            alt="Interior design"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default AuthUser;
