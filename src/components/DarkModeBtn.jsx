import { BsFillSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const DarkModeBtn = () => {
  return (
    <IconContext.Provider value={{ size: "3.5rem" }}>
      <span className="text-white w-20 h-20">
        <BsFillSunFill />{" "}
      </span>
    </IconContext.Provider>
  );
};

export default DarkModeBtn;
