import React, { useEffect, useState } from "react";
import { useGastosContext } from "../context/GastoContext";
import Filtros from "./Filtros";
import Gasto from "./Gasto";

const ListadoGastos = ({ handleModal }) => {
  const { gastos, filtro } = useGastosContext();
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (filtro) {
      const newGastos = gastos.filter((gasto) => gasto.categoria === filtro);
      setGastosFiltrados(newGastos);
    }
  }, [filtro]);

  return (
    <div className="listado-gastos contenedor">
      {gastos.length && <Filtros />}
      <div className="listado-gastos contenedor">
        <h2 className=" text-3xl">
          {gastos.length ? "Listado de Gastos" : "Sin gastos, agrega uno"}
        </h2>
        {filtro
          ? gastosFiltrados.map((gasto) => (
              <div key={gasto.id}>
                <Gasto gasto={gasto} handleModal={handleModal} />
              </div>
            ))
          : gastos.map((gasto) => (
              <div key={gasto.id}>
                <Gasto gasto={gasto} handleModal={handleModal} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListadoGastos;
