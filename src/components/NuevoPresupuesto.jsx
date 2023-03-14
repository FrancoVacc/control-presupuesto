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
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            type="number"
            name="presupuesto"
            className="nuevo-presupuesto"
            placeholder="Añade presupuesto"
            value={pres}
            onChange={(e) => setPres(Number(e.target.value.trim()))}
          />
        </div>
        {validation && <Validation validation={validation} />}
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
