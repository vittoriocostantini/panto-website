import { LocalMall } from "@mui/icons-material";
import logoPanto from "../../assets/logo-panto.png";

interface HeaderLabels {
  label: string;
  href: string;
}

const defaultLabels: HeaderLabels[] = [
  { label: "Furniture", href: "/" },
  { label: "Shop", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
];

function Header({ labels = defaultLabels }: { labels: HeaderLabels[] }) {
  return (
    <header className=" text-white px-6 py-4 bg-black/5">
      <div className=" mx-10 flex items-center justify-between">
        <div className="shrink-0">
          <img src={logoPanto} alt="Panto" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex items-center space-x-20 grow justify-center">
          {labels.map((label) => (
            <a key={label.label} href={label.href} className="hover:text-gray-300 transition-colors">
              {label.label}
            </a>
          ))}
        </nav>

        <div className="shrink-0">
          <button className="hover:text-gray-300 transition-colors">
            <LocalMall fontSize="medium" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
