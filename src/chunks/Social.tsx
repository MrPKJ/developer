import { useState } from "react";
import { socials, DEFAULT_SIZE } from "../contents/Footer";
import { Link } from "react-router-dom";

enum Justify {
  CENTER = "CENTER",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

type SocialProps = {
  jusitfy: Justify;
};

export const Social = (props: SocialProps) => {
  const [justify, setJustify] = useState("justify-center");
  switch (props.jusitfy) {
    case "CENTER":
      setJustify("justify-center");
      break;
    case "LEFT":
      setJustify("justify-left");
      break;
    case "RIGHT":
      setJustify("justify-right");
      break;
  }
  return (
    <div
      className={`flex flex-row ${justify} items-center gap-4 cursor-pointer`}
    >
      {socials.map((content) => {
        return (
          <Link to={content.url}>
            {<content.component size={DEFAULT_SIZE} />}
          </Link>
        );
      })}
    </div>
  );
};
