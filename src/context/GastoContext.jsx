import { useContext, createContext, useState } from "react";

export const GastoContext = createContext();

const initialData = [
  { id: 1, name: "prueba", cantidad: "500", categoria: "ahorro" },
  { id: 2, name: "prueba2", cantidad: "1000", categoria: "comida" },
];

const GastoProvider = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [disponible, setDisponible] = useState(presupuesto);
  const [utilizado, setUtilizado] = useState(0);
  const [gastos, setGastos] = useState(initialData);

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
      }}
    >
      {children}
    </GastoContext.Provider>
  );
};

export default GastoProvider;

export const useGastosContext = () => useContext(GastoContext);
