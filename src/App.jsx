import Header from "./components/Header";
import Modal from "./components/Modal";
import { useGastosContext } from "./context/GastoContext";
import ListadoGastos from "./components/ListadoGastos";
import Swal from "sweetalert2";
import NuevoGastoBtn from "./components/NuevoGastoBtn";
import DarkModeBtn from "./components/DarkModeBtn";
import LigthModeBtn from "./components/LigthModeBtn";

function App() {
  const {
    isValidPresupuesto,
    modal,
    setModal,
    animarModal,
    setAnimarModal,
    disponible,
    darkMode,
    setDarkMode,
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

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div>
      <div
        className="fixed bottom-1 md:absolute md:top-5 right-5 z-20"
        onClick={handleDarkMode}
      >
        {darkMode ? <LigthModeBtn /> : <DarkModeBtn />}
      </div>
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
