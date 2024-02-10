import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <nav className="flex md:flex-row flex-col justify-between p-4 md:items-center">
        <Link href={"/"} className="font-bold text-2xl">
          AniList
        </Link>
        <InputSearch />
      </nav>
    </header>
  );
};

export default Navbar;
