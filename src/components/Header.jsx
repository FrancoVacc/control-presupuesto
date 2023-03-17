import React from "react";
import { useGastosContext } from "../context/GastoContext";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PresupuestoValido from "./PresupuestoValido";

const Header = ({ handleModal, animarModal }) => {
  const { isValidPresupuesto, presupuesto } = useGastosContext();
  return (
    <header className="py-2">
      <h1 className=" text-6xl text-center m-0 px-[3rem] py-2 text-white">
        Controlador de Gastos
      </h1>
      {!isValidPresupuesto && presupuesto === 0 ? (
        <NuevoPresupuesto />
      ) : (
        <PresupuestoValido
          handleModal={handleModal}
          animarModal={animarModal}
        />
      )}
    </header>
  );
};

export default Header;
