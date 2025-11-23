import { AccountCircle, LocalMall, Logout } from "@mui/icons-material";
import logoPanto from "../../assets/logo-panto.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { PublicRoutes } from "../../routes";
import { Badge } from "@mui/material";
import { selectCartCount } from "../../redux/slices/cart";
import { useAppSelector } from "../../redux/hooks";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const cartCount = useAppSelector(selectCartCount);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PublicRoutes.HOME);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="fixed w-full z-11 text-white px-6 py-4 bg-black/20 backdrop-blur-md">
      <div className="mx-10 flex items-center justify-between">
        <button
          className="shrink-0"
          onClick={() => navigate(PublicRoutes.HOME)}
        >
          <img
            src={logoPanto}
            alt="Panto"
            className="h-8 w-auto cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </button>

        <div className="shrink-0 flex items-center gap-4">
          <Link
            to="/cart"
            className="hover:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <Badge badgeContent={cartCount} color="primary">
              <LocalMall fontSize="medium" />
            </Badge>
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300"
              title="Cerrar sesión"
            >
              <Logout fontSize="medium" />
            </button>
          ) : (
            <Link
              to="/auth"
              className="hover:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <AccountCircle fontSize="medium" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
