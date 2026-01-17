import { useState, useEffect } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import reviewImage from "../../../assets/reviews/review-5.jpeg";
import { PublicRoutes } from "../../../routes";
// import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";

function FormUser() {
  // const { loginWithGoogle, loginWithEmail, registerWithEmail } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Limpiar error y campos cuando cambia el modo login/registro
  useEffect(() => {
    setError(null);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [isLogin]);

  const firebaseErrorMessages: Record<string, string> = {
    "auth/user-not-found": "Este email no está registrado",
    "auth/wrong-password": "Contraseña incorrecta",
    "auth/email-already-in-use": "Este email ya está registrado",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres",
    "auth/invalid-email": "Email inválido",
    "auth/invalid-credential": "Credenciales inválidas",
    "auth/too-many-requests": "Demasiados intentos. Intenta más tarde",
    "auth/popup-closed-by-user": "Inicio de sesión cancelado",
    "auth/network-request-failed": "Error de conexión. Verifica tu internet",
  };

  const getFirebaseErrorMessage = (code: string): string =>
    firebaseErrorMessages[code] || "Ocurrió un error al autenticarse";

  const validateForm = (): boolean => {
    if (!email || !password) {
      setError("Todos los campos son requeridos");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un email válido");
      return false;
    }

    // Validar contraseñas si no es login
    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        return false;
      }
      if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres");
        return false;
      }
    }

    return true;
  };

  // Función para ejecutar el flujo de autenticación
  const runAuthFlow = async (
    authFn: () => Promise<void>,
    fallbackError: string
  ) => {
    setError(null);
    setLoading(true);

    // Intentar ejecutar la función de autenticación
    try {
      await authFn();
      navigate(PublicRoutes.HOME, { replace: true });
    } catch (error: any) {
      const errorMessage = error?.code
        ? getFirebaseErrorMessage(error.code)
        : error instanceof Error
        ? error.message
        : fallbackError;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    // await runAuthFlow(
    //   () =>
    //     isLogin
    //       ? loginWithEmail(email, password)
    //       : registerWithEmail(email, password),
    //   "Ocurrió un error al autenticarse"
    // );
  };


  // Función para manejar el inicio de sesión con Google
  // const handleGoogleLogin = async () => {
  //   await runAuthFlow(
  //     () => loginWithGoogle(),
  //     "Ocurrió un error al iniciar sesión con Google"
  //   );
  // };

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

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

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
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={loading}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 disabled:opacity-50"
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
                    disabled={loading}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    disabled={loading}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 disabled:opacity-50"
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
                    disabled={loading}
                    className="w-4 h-4 text-[#1A1A1A] border-gray-300 rounded focus:ring-[#1A1A1A] disabled:opacity-50"
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

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <button
              type="button"
              // onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {loading ? "Cargando..." : "Continuar con Google"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? (
                  <>
                    ¿No tienes una cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      disabled={loading}
                      className="text-[#1A1A1A] hover:text-[#323131] font-semibold disabled:opacity-50"
                    >
                      Regístrate aquí
                    </button>
                  </>
                ) : (
                  <>
                    ¿Ya tienes una cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      disabled={loading}
                      className="text-[#1A1A1A] hover:text-[#323131] font-semibold disabled:opacity-50"
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

export default FormUser;
