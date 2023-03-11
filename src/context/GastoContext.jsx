import { useContext, createContext, useState } from "react";

export const GastoContext = createContext();

const initialData = [];

const GastoProvider = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [disponible, setDisponible] = useState(presupuesto);
  const [utilizado, setUtilizado] = useState(0);
  const [gastos, setGastos] = useState(initialData);
  const [gastoEditar, setGastoEditar] = useState(null);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

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
      }}
    >
      {children}
    </GastoContext.Provider>
  );
};

export default GastoProvider;

export const useGastosContext = () => useContext(GastoContext);
