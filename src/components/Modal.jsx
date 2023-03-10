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
    <div className="modal">
      <div className="cerrar-modal">
        <img src={imgCerrarModal} alt="" onClick={cerrarModal} />
      </div>
      <form className={`formulario ${animarModal && "animar"}`}>
        <legend>{!gastoEditar ? "Nuevo Gasto" : "Editar Gasto"}</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nuevoGasto.name}
            onChange={(e) =>
              setNuevoGasto({ ...nuevoGasto, name: e.target.value })
            }
            placeholder="Agregue un nuevo gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            name="cantidad"
            id="cantidad"
            value={nuevoGasto.cantidad}
            onChange={(e) =>
              setNuevoGasto({ ...nuevoGasto, cantidad: e.target.value })
            }
            placeholder="Agregue una cantidad"
          />
        </div>
        <div
          className="campo"
          value={nuevoGasto.categoria}
          onChange={(e) =>
            setNuevoGasto({ ...nuevoGasto, categoria: e.target.value })
          }
        >
          <label htmlFor="categoría">Categoría</label>
          <select id="categoria">
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
          value={`${!gastoEditar ? "Añadir gasto" : "Editar Gasto"}`}
          onClick={handleSubit}
        />
        {error && <p className="validation ">{error}</p>}
      </form>
    </div>
  );
};

export default Modal;
