import React, { useEffect, useState } from "react";
import { useGastosContext } from "../context/GastoContext";
import Moon from "../img/moon.svg";
import Sun from "../img/sun.svg";

const DarkModeBtn = () => {
  const { darkMode } = useGastosContext;

  const [change, setChange] = useState(true);

  useEffect(() => {
    setChange(darkMode);
  }, [darkMode]);

  return <img src={change ? Moon : Sun} alt="" className="w-20 h-20" />;
};

export default DarkModeBtn;
