import { AccountCircle, LocalMall  } from "@mui/icons-material";
import logoPanto from "../../assets/logo-panto.png";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-11  text-white px-6 py-4  bg-black/20 backdrop-blur-md">
      <div className=" mx-10 flex items-center justify-between">
        <button
          className="shrink-0 "
          onClick={() => (window.location.href = "/")}
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
            <LocalMall fontSize="medium" />
          </Link>
          <Link
            to="/auth"
            className="hover:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <AccountCircle fontSize="medium" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
