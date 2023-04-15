import { Link } from "react-router-dom";
import { DEFAULT_SIZE, socials } from "../contents/Footer";

export const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="w-full h-32 bg-[#2d2e32] font-poppins box-border text-white flex flex-col xl:justify-between justify-around items-center xl:px-96 px-10 xl:py-10 py-5 xl:flex-row">
      <h3 className="font-bold text-[1rem]">
        Copyright © <span>{Year}</span>. All rights are reserved
      </h3>
      <div className="flex flex-row justify-end items-center gap-4 cursor-pointer">
        {socials.map((content) => {
          return (
            <Link to={content.url}>
              {<content.component size={DEFAULT_SIZE} />}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};
