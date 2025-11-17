import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center gap-4 rounded-full bg-white/20 px-2 ring-1 ring-white/50  py-2 backdrop-blur-md  max-w-md mx-auto mt-20 ">
      <input
        type="text"
        placeholder="Search furniture"
        className="w-full bg-transparent  text-white placeholder-white/70 outline-none border-none text-lg font-light"
      />
      <button
        aria-label="buscar"
        className="grid place-items-center h-12 cursor-pointer  aspect-square rounded-full bg-orange-500 "
      >
        <Search sx={{ color: "#fff", fontSize: 32 }} />
      </button>
    </div>
  );
};

export default SearchBar;
