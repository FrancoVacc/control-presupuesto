import React from "react";
import { useGastosContext } from "../context/GastoContext";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PresupuestoValido from "./PresupuestoValido";

const Header = () => {
  const { isValidPresupuesto } = useGastosContext();
  return (
    <header>
      <h1>Controlador de Gastos</h1>
      {!isValidPresupuesto ? <NuevoPresupuesto /> : <PresupuestoValido />}
    </header>
  );
};

export default Header;
