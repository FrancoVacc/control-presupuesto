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
    <div className=" flex flex-col gap-2 md:w-1/2 mx-auto px-5 mb-14">
      <div className="w-[100%] my-12 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600"></div>
      {gastos.length ? <Filtros /> : ""}

      <h2 className=" text-4xl text-neutral-300 text-center">
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
  );
};

export default ListadoGastos;
