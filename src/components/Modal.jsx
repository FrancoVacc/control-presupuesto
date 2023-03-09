import React from "react";
import imgCerrarModal from "../img/cerrar.svg";

const Modal = ({ handleModal, animarModal }) => {
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={imgCerrarModal} alt="" onClick={handleModal} />
      </div>
      <form className={`formulario ${animarModal && "animar"}`}>
        <legend>Definir Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Agregue un nuevo gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            name="cantidad"
            id="cantidad"
            placeholder="Agregue una cantidad"
          />
        </div>
        <div className="campo">
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
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
