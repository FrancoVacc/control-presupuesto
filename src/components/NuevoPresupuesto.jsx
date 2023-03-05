import React, { useState } from "react";
import Validation from "./Validation";

const NuevoPresupuesto = ({
  setPresupuesto,
  presupuesto,
  setIsValidPresupuesto,
}) => {
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto <= 0) {
      setValidation("No es presupuesto válido");
      return;
    }
    setValidation(false);
    setIsValidPresupuesto(true);
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
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value.trim()))}
          />
        </div>
        {validation && <Validation validation={validation} />}
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
