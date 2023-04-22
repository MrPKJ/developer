import { socials } from "../contents/Footer";
import { Link } from "react-router-dom";

type SocialProps = {
  jusitfy: "CENTER" | "LEFT" | "RIGHT";
  size: number;
};

export const Social = (props: SocialProps) => {
  let flex = "justify-center";
  if (props.jusitfy == "CENTER") {
    flex = "justify-center";
  } else if (props.jusitfy == "LEFT") {
    flex = "jusitfy-left";
  } else if (props.jusitfy == "RIGHT") {
    flex = "jusitfy-right";
  }
  return (
    <div className={`flex flex-row ${flex} items-center gap-4 cursor-pointer`}>
      {socials.map((content) => {
        return (
          <Link to={content.url}>
            {<content.component size={props.size} />}
          </Link>
        );
      })}
    </div>
  );
};
