import { FC } from "react";
import { IoIosLaptop } from "react-icons/io";
import { Social, SocialProps } from "../chunks/Social";
import { Size } from "./Footer";

type Image = {
  url: string;
  description: string;
};
type HomeContent = {
  heading: string;
  description: string;
  image: Image;
  supporticon: FC<Size>;
  socialicon: FC<SocialProps>;
};

export const Hero: HomeContent = {
  heading: "Front-End React Developer",
  description:
    "Hi, I'm Priyanshu Kumar Jha. A passionate Programmer based in Bihar, India. 📍",
  image: {
    url: "https://avatars.githubusercontent.com/u/127951878?v=4",
    description: "Developer",
  },
  supporticon: IoIosLaptop,
  socialicon: Social,
};
