import { useState, useEffect } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { loginUser, registerUser } from "../../../redux/slices/auth-slice";
import { PublicRoutes } from "../../../routes";
import reviewImage from "../../../assets/reviews/review-5.jpeg";

function FormUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error: reduxError } = useSelector((state: RootState) => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    setLocalError(null);
  }, [isLogin, email, password]);

  const validateForm = (): boolean => {
    if (!email || !password) {
      setLocalError("Todos los campos son requeridos");
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      setLocalError("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = { email, password };

    const resultAction = await dispatch(
      isLogin ? loginUser(userData) : registerUser({ ...userData, name: email.split('@')[0] })
    );

    if (loginUser.fulfilled.match(resultAction) || registerUser.fulfilled.match(resultAction)) {
      navigate(PublicRoutes.HOME, { replace: true });
    }
  };

  return (
    <div className="h-screen bg-white flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">
              {isLogin ? "Bienvenido" : "Crear Cuenta"}
            </h1>
          </div>

          {(localError || reduxError) && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{localError || reduxError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo</label>
              <div className="relative">
                <Email className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
                  placeholder="tu@email.com"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Campo Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
                  placeholder="••••••••"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-500"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
            </div>

            {/* Confirmar Password (Solo Registro) */}
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
                  placeholder="Confirmar contraseña"
                  disabled={loading}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#1A1A1A] text-white rounded-lg font-semibold hover:bg-[#333] transition-all disabled:opacity-50"
            >
              {loading ? "Procesando..." : isLogin ? "Iniciar Sesión" : "Registrarse"}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm font-semibold text-black hover:underline"
              >
                {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Imagen lateral */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={reviewImage} alt="Design" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default FormUser;
