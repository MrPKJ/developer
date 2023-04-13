import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white shadow-md px-12 flex flex-row justify-between items-center">
      <Link to={`/`}>
        <h1 className="font-bold font-poppins text-black text-xl">
          PriyanshuKJ.dev
        </h1>
      </Link>
      <nav className="font-semibold font-poppins text-[1.05rem] flex flex-row justify-around items-center gap-6">
        <p className="hover:text-blue-500">Home</p>
        <p className="hover:text-blue-500">About</p>
        <p className="hover:text-blue-500">Projects</p>
        <p className="hover:text-blue-500">Contact</p>
      </nav>
    </header>
  );
};
