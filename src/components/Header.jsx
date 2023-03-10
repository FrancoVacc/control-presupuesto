import React from "react";
import { useGastosContext } from "../context/GastoContext";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PresupuestoValido from "./PresupuestoValido";

const Header = () => {
  const {
    setPresupuesto,
    presupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    disponible,
    utilizado,
  } = useGastosContext();
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
