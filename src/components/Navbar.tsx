import { Link } from "react-router-dom";
import { BsMenuButtonFill, BsMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";
import { nav } from "../contents/Navbar";

export const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <header className="w-full h-20 bg-white shadow-md px-12 flex flex-row justify-between items-center">
      <Link to={`/`}>
        <h1 className="font-bold font-poppins text-black text-xl">
          PriyanshuKJ.dev
        </h1>
      </Link>
      <nav className="font-semibold font-poppins text-[1.05rem] hidden flex-row justify-around items-center gap-6 cursor-pointer lg:flex">
        {nav.map((content) => {
          return (
            <Link to={content.path}>
              <p id={content.id} className="hover:text-blue-500">
                {content.title}
              </p>
            </Link>
          );
        })}
      </nav>
      <nav className="flex flex-col lg:hidden cursor-pointer justify-between items-center w-auto relative">
        <div
          className="flex justify-center items-center"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? (
            <BsMenuButtonFill size={20} />
          ) : (
            <BsMenuButtonWideFill size={20} />
          )}
        </div>
        <div
          className={`flex-col justify-center items-center gap-5 absolute top-10 right-0 bg-[#FFFFF0] shadow-md py-5 px-10 ${
            toggle ? "flex" : "hidden"
          }`}
        >
          {nav.map((content) => {
            return (
              <Link to={content.path}>
                <p
                  id={content.id}
                  className="hover:text-blue-500"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {content.title}
                </p>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
