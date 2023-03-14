import React from "react";
import { useGastosContext } from "../context/GastoContext";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PresupuestoValido from "./PresupuestoValido";

const Header = () => {
  const { isValidPresupuesto, presupuesto } = useGastosContext();
  return (
    <header>
      <h1>Controlador de Gastos</h1>
      {!isValidPresupuesto && presupuesto === 0 ? (
        <NuevoPresupuesto />
      ) : (
        <PresupuestoValido />
      )}
    </header>
  );
};

export default Header;
