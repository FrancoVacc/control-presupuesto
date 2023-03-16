import React from "react";
import imgNuevoGasto from "../img/nuevo-gasto.svg";

const NuevoGastoBtn = ({ handleModal }) => {
  return (
    <div
      className="flex justify-center md:justify-end fixed bottom-0 bg-neutral-800 w-[100%] h-5 md:h-auto py-1 md:bg-transparent  md:bottom-10 md:right-10"
      onClick={handleModal}
    >
      <img
        src={imgNuevoGasto}
        alt=""
        className="absolute bottom-1 w-10 h-10 md:w-32 md:h-32"
      />
    </div>
  );
};

export default NuevoGastoBtn;
