import React, { useState } from "react";
import { useGastosContext } from "../context/GastoContext";
import Validation from "./Validation";

const NuevoPresupuesto = () => {
  const { setPresupuesto, setIsValidPresupuesto } = useGastosContext();
  const [validation, setValidation] = useState(false);
  const [pres, setPres] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pres || pres <= 0) {
      setValidation("No es presupuesto válido");
      return;
    }
    setValidation(false);
    setIsValidPresupuesto(true);
    setPresupuesto(pres);
    localStorage.setItem("presupuesto", JSON.stringify(pres));
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[100%] bg-gradient-to-r  from-cyan-400 to-fuchsia-600 blur-3xl w-[70%] mx-auto rounded-md flex"></div>
      <div className=" relative my-3 mx-3 md:h-[300px] bg-white w-[70%] md:w-[60%] md:mx-auto rounded-md flex justify-between items-center shadow-md dark:bg-neutral-800">
        <form
          className="flex flex-col items-center m-auto w-[90%]"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="presupuesto"
            className="text-4xl text-white py-8 m-auto "
          >
            Definir Presupuesto
          </label>
          <input
            type="number"
            name="presupuesto"
            className=" w-[80%] md:w-1/2 py-2 my-5 px-5 text-3xl text-center text-fuchsia-600 rounded-md"
            placeholder="Añade presupuesto"
            value={pres}
            onChange={(e) => setPres(Number(e.target.value.trim()))}
          />
          <input
            type="submit"
            value="Añadir"
            className=" py-2 px-10 bg-fuchsia-600 text-white  mb-5 w-[80%] md:w-1/2 text-3xl rounded-md"
          />

          {validation && <Validation validation={validation} />}
        </form>
      </div>
    </div>
  );
};

export default NuevoPresupuesto;
