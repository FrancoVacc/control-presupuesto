import React, { useState } from "react";
import { useGastosContext } from "../context/GastoContext";
import imgCerrarModal from "../img/cerrar.svg";

const Modal = ({ handleModal, animarModal }) => {
  const { gastos, setGastos, disponible, gastoEditar, setGastoEditar } =
    useGastosContext();
  const [nuevoGasto, setNuevoGasto] = useState(
    gastoEditar || {
      name: "",
      cantidad: "",
      categoria: "",
    }
  );
  const [error, setError] = useState(false);

  const opciones = { year: "numeric", month: "long", day: "2-digit" };
  const fecha = new Date();
  const cerrarModal = () => {
    setGastoEditar(null);
    handleModal();
  };
  const handleSubit = (e) => {
    e.preventDefault();
    if (nuevoGasto.name.trim() === "") {
      setError("El texto es un campo obligatorio");
      return;
    }
    if (nuevoGasto.cantidad === "" || nuevoGasto.cantidad <= 0) {
      setError("El gasto debe ser mayor a 0");
      return;
    }
    if (Number(nuevoGasto.cantidad) > disponible) {
      setError("El gasto no puede exceder el presupuesto");
      return;
    }
    if (nuevoGasto.categoria === "") {
      setError("Debe elegir una categoría");
      return;
    }
    if (!gastoEditar) {
      const newGasto = [
        ...gastos,
        {
          ...nuevoGasto,
          id: Date.now(),
          fecha: fecha.toLocaleString("es-ES", opciones),
        },
      ];
      setGastos(newGasto);
    } else {
      const newGasto = gastos.map((gasto) =>
        gasto.id === gastoEditar.id ? nuevoGasto : gasto
      );
      setGastos(newGasto);
      setGastoEditar(null);
    }
    setNuevoGasto({ ...nuevoGasto, name: "", cantidad: "", categoria: "" });
    handleModal();
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute bg-gradient-to-r h-[100%] from-cyan-400 to-fuchsia-600 blur-xl w-[100%] md:w-2/4 p-10 mx-5 md:mx-auto rounded-md"></div>
      <div className=" relative flex justify-center bg-neutral-200 dark:bg-neutral-800 md:w-2/4 p-10 mx-5 md:mx-auto rounded-md">
        <form
          className={`flex flex-col items-center justify-center w-[100%] ${
            animarModal && "animar"
          }`}
        >
          <legend className=" text-4xl text-neutral-800 dark:text-neutral-200">
            {!gastoEditar ? "Nuevo Gasto" : "Editar Gasto"}
          </legend>
          <div className="w-[100%] my-12 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600"></div>
          <div className="md:w-2/3">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="nombre"
                className="text-2xl text-neutral-800 dark:text-neutral-200"
              >
                Nombre del Gasto
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="w-2/3 rounded-md py-2 px-5"
                value={nuevoGasto.name}
                onChange={(e) =>
                  setNuevoGasto({ ...nuevoGasto, name: e.target.value })
                }
                placeholder="Agregue un nuevo gasto"
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="cantidad"
                className="text-2xl text-neutral-800 dark:text-neutral-200"
              >
                Cantidad
              </label>
              <input
                type="number"
                name="cantidad"
                id="cantidad"
                className="w-2/3 rounded-md py-2 px-5"
                value={nuevoGasto.cantidad}
                onChange={(e) =>
                  setNuevoGasto({ ...nuevoGasto, cantidad: e.target.value })
                }
                placeholder="Agregue una cantidad"
              />
            </div>

            <div
              className="flex justify-between items-center mb-2"
              value={nuevoGasto.categoria}
              onChange={(e) =>
                setNuevoGasto({ ...nuevoGasto, categoria: e.target.value })
              }
            >
              <label
                htmlFor="categoría"
                className="text-2xl text-neutral-800 dark:text-neutral-200"
              >
                Categoría
              </label>
              <select id="categoria" className="w-2/3 rounded-md py-2 px-5">
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
              </select>
            </div>

            <input
              type="submit"
              className=" w-[100%] text-neutral-200 text-3xl px-5 py-2 rounded-md cursor-pointer bg-gradient-to-r from-cyan-300 to-fuchsia-600 my-5"
              value={`${!gastoEditar ? "Añadir gasto" : "Editar Gasto"}`}
              onClick={handleSubit}
            />

            {error && <p className="validation ">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
