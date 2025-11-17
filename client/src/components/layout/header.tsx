import { LocalMall } from "@mui/icons-material";
import logoPanto from "../../assets/logo-panto.png";



const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-11  text-white px-6 py-4  bg-black/20 backdrop-blur-md">
      <div className=" mx-10 flex items-center justify-between">
        <button className="shrink-0 " onClick={() => window.location.href = '/'}>
          <img src={logoPanto} alt="Panto" className="h-8 w-auto cursor-pointer hover:scale-110 transition-all duration-300" />
        </button>

  

        <div className="shrink-0">
          <button className="hover:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300">
            <LocalMall fontSize="medium" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
