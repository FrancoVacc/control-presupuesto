import Header from "./components/Header";
import Modal from "./components/Modal";
import { useGastosContext } from "./context/GastoContext";
import ListadoGastos from "./components/ListadoGastos";
import Swal from "sweetalert2";
import NuevoGastoBtn from "./components/NuevoGastoBtn";

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
    <div>
      <Header handleModal={handleModal} animarModal={animarModal} />
      {isValidPresupuesto && (
        <div>
          <div>
            <ListadoGastos handleModal={handleModal} />
          </div>
          <NuevoGastoBtn handleModal={handleModal} />
        </div>
      )}
    </div>
  );
}

export default App;
