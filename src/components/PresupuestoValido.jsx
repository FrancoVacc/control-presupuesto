import { useEffect } from "react";
import Swal from "sweetalert2";
import { useGastosContext } from "../context/GastoContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PresupuestoValido = () => {
  const {
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
    setGastos,
    disponible,
    setDisponible,
    utilizado,
    setUtilizado,
    gastos,
  } = useGastosContext();

  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + Number(total),
      0
    );
    setUtilizado(totalGastos);
    setDisponible(Number(presupuesto) - Number(totalGastos));
  }, [gastos]);

  const formateo = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const resetApp = () => {
    Swal.fire({
      title: "Estas Seguro de que quieres reiniciar la app?",
      text: "No serás capaz de volver atras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Reiniciado", "la App se reinició correctamente", "success");
        setPresupuesto(0);
        setIsValidPresupuesto(false);
        setGastos([]);
        setDisponible(presupuesto);
        setUtilizado(0);
      }
    });
  };

  const percentage = (utilizado * 100) / presupuesto;
  const progressBarOptions = {
    pathColor:
      percentage < 50
        ? "#3b82f6"
        : percentage < 80 && percentage > 50
        ? "#f55f04"
        : "#f50404",
    trailColor: "#f5f5f5",
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="contenido-presupuesto">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles(progressBarOptions)}
        />
      </div>
      <div className="contenido-presupuesto">
        <div>
          <button className="reset-app" onClick={() => resetApp()}>
            Resetear App
          </button>
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
