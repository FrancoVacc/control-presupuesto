import { useContext, createContext, useState, useEffect } from "react";

export const GastoContext = createContext();
const initialData = JSON.parse(localStorage.getItem("gastos")) || [];
const initialPresupuesto = JSON.parse(localStorage.getItem("presupuesto")) || 0;

const GastoProvider = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState(initialPresupuesto);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [disponible, setDisponible] = useState(presupuesto);
  const [utilizado, setUtilizado] = useState(0);
  const [gastos, setGastos] = useState(initialData);
  const [gastoEditar, setGastoEditar] = useState(null);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
    if (presupuesto > 0) {
      setIsValidPresupuesto(true);
    }
  }, [presupuesto]);

  return (
    <GastoContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        isValidPresupuesto,
        setIsValidPresupuesto,
        disponible,
        setDisponible,
        utilizado,
        setUtilizado,
        gastos,
        setGastos,
        gastoEditar,
        setGastoEditar,
        modal,
        setModal,
        animarModal,
        setAnimarModal,
        filtro,
        setFiltro,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </GastoContext.Provider>
  );
};

export default GastoProvider;

export const useGastosContext = () => useContext(GastoContext);
