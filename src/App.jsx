import Header from "./components/Header";
import imgNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { useGastosContext } from "./context/GastoContext";
import ListadoGastos from "./components/ListadoGastos";
import Swal from "sweetalert2";

function App() {
  const {
    isValidPresupuesto,
    modal,
    setModal,
    animarModal,
    setAnimarModal,
    disponible,
  } = useGastosContext();

  const handleModal = () => {
    if (disponible === 0) {
      Swal.fire("No tiene dinero disponible");
      return;
    }
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
    <div className={modal ? "fijar" : ""}>
      <Header />
      {isValidPresupuesto && (
        <>
          <ListadoGastos handleModal={handleModal} />
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
