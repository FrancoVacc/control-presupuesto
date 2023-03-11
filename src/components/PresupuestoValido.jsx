import { useEffect } from "react";
import { useGastosContext } from "../context/GastoContext";

const PresupuestoValido = () => {
  const {
    presupuesto,
    disponible,
    setDisponible,
    utilizado,
    setUtilizado,
    gastos,
  } = useGastosContext();

  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, gasto) => parseInt(gasto.cantidad) + parseInt(total),
      0
    );
    setUtilizado(totalGastos);
    setDisponible(parseInt(presupuesto) - parseInt(totalGastos));
  }, [gastos]);

  const formateo = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="contenido-presupuesto">grafica</div>
      <div className="contenido-presupuesto">
        <div>
          <button className="reset-app">Resetear App</button>
        </div>
        <p>
          <span>Presupuesto:</span> {formateo(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formateo(disponible)}
        </p>
        <p>
          <span>Utilizado:</span> {formateo(utilizado)}
        </p>
      </div>
    </div>
  );
};

export default PresupuestoValido;
