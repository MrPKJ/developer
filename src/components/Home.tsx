import { Social } from "../chunks/Social";
import { IoIosLaptop } from "react-icons/io";

export const Home = () => {
  return (
    <main className="w-full sm:h-[calc(87vh-80px)] h-auto bg-[#f9f9f9] flex flex-col justify-center items-center box-border">
      <section className="xl:w-[950px] w-full h-auto flex flex-col-reverse xl:flex-row xl:px-0 px-10 justify-between items-center gap-10 my-10">
        <article className="flex flex-col justify-center xl:items-start items-center xl:text-start text-center xl:w-[500px] w-full text-black font-poppins gap-3 relative">
          <section className="flex xl:flex-row flex-col xl:items-end items-center xl:justify-start justify-center">
            <h1 className="font-bold xl:text-[55px] text-[40px] xl:w-3/4 w-full">
              Front-End React Developer
            </h1>
            <div className="h-full">
              <IoIosLaptop size={100} />
            </div>
          </section>
          <p className="font-mulish text-[#767676] text-[18px] my-4">
            Hi, I'm Priyanshu Kumar Jha. A passionate Programmer based in Bihar,
            India. 📍
          </p>
          <Social jusitfy="LEFT" size={30} />
        </article>
        <img
          className="rounded-full object-fill xl:h-[350px] h-auto xl:w-[350px] w-auto"
          src={`https://avatars.githubusercontent.com/u/127951878?v=4`}
          alt="developer"
        />
      </section>
    </main>
  );
};
