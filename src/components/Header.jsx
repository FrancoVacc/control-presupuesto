import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PresupuestoValido from "./PresupuestoValido";

const Header = ({
  setPresupuesto,
  presupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  disponible,
  utilizado,
}) => {
  return (
    <header>
      <h1>Controlador de Gastos</h1>
      {!isValidPresupuesto ? (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <PresupuestoValido
          presupuesto={presupuesto}
          disponible={disponible}
          utilizado={utilizado}
        />
      )}
    </header>
  );
};

export default Header;
