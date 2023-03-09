import { useState } from "react";
import Header from "./components/Header";
import imgNuevoGasto from "./img/nuevo-gasto.svg";

import Modal from "./components/Modal";
import Gasto from "./components/Gasto";

const initialData = [
  { id: 1, nombre: "prueba", cantidad: "500", categoria: "ahorro" },
  { id: 2, nombre: "prueba2", cantidad: "1000", categoria: "comida" },
];

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [disponible, setDisponible] = useState(presupuesto);
  const [utilizado, setUtilizado] = useState(0);
  const [gastos, setGastos] = useState(initialData);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleModal = () => {
    if (!modal) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 200);
    } else {
      setModal(false);
      setAnimarModal(false);
    }
  };

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        disponible={disponible}
        setDisponible={setDisponible}
        utilizado={utilizado}
        setUtilizado={setUtilizado}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto" onClick={handleModal}>
          <img src={imgNuevoGasto} alt="" />
        </div>
      )}
      {modal && <Modal handleModal={handleModal} animarModal={animarModal} />}
      {gastos.length > 0 &&
        isValidPresupuesto &&
        gastos.map((gasto) => (
          <div key={gasto.id}>
            <Gasto gasto={gasto} />
          </div>
        ))}
    </>
  );
}

export default App;
