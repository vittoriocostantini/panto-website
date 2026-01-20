import { AccountCircle, LocalMall, Logout } from "@mui/icons-material";
import { Badge } from "@mui/material"; //
import logoPanto from "../../../assets/logo-panto.png";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/slices/auth-slice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate(PublicRoutes.HOME);
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
            <Badge
              badgeContent={cartItemCount}
              color="error" 
              sx={{
                "& .MuiBadge-badge": {
                  right: -3,
                  top: 3,
                  border: `2px solid transparent`,
                  padding: "0 4px",
                },
              }}
            >
              <LocalMall fontSize="medium" />
            </Badge>
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium hidden md:inline">
                Hola, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 cursor-pointer hover:scale-110 transition-all duration-300"
                title="Cerrar sesión"
              >
                <Logout fontSize="medium" />
              </button>
            </div>
          ) : (
            <Link
              to={PublicRoutes.AUTH}
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
