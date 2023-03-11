import React from "react";
import { useGastosContext } from "../context/GastoContext";
import Gasto from "./Gasto";

const ListadoGastos = ({ handleModal }) => {
  const { gastos } = useGastosContext();

  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Listado de Gastos" : "Sin gastos, agrega uno"}</h2>
      {gastos.map((gasto) => (
        <div key={gasto.id}>
          <Gasto gasto={gasto} handleModal={handleModal} />
        </div>
      ))}
    </div>
  );
};

export default ListadoGastos;
