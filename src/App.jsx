import { useState } from "react";
import Header from "./components/Header";
import imgNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import Gasto from "./components/Gasto";
import { useGastosContext } from "./context/GastoContext";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const { isValidPresupuesto, gastos } = useGastosContext();

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
    <div className={modal && "fijar"}>
      <Header />
      {isValidPresupuesto && (
        <>
          <ListadoGastos />
          <div className="nuevo-gasto" onClick={handleModal}>
            <img src={imgNuevoGasto} alt="" />
          </div>
        </>
      )}
      {modal && <Modal handleModal={handleModal} animarModal={animarModal} />}
    </div>
  );
}

export default App;
