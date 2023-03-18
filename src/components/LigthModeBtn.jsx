import { BiMoon } from "react-icons/bi";
import { IconContext } from "react-icons";

const DarkModeBtn = () => {
  return (
    <IconContext.Provider value={{ size: "3.5rem" }}>
      <span className=" text-neutral-800 md:text-white">
        <BiMoon />{" "}
      </span>
    </IconContext.Provider>
  );
};

export default DarkModeBtn;
