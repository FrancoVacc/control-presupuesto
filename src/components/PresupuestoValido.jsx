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
    trailColor: "#d4d4d4",
    textColor: "#c026d3",
  };
  return (
    <div className="relative flex justify-center">
      <div className="absolute bg-gradient-to-r h-[100%] from-cyan-400 to-fuchsia-600 blur-3xl w-[100%] md:w-2/4 p-10 mx-5 md:mx-auto rounded-md"></div>
      <div className=" relative  md:grid md:grid-cols-2 bg-white dark:bg-neutral-800 md:w-2/4 p-10 mx-5 md:mx-auto rounded-md">
        <div className="p-5">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles(progressBarOptions)}
          />
        </div>
        <div className="p-5">
          <div>
            <button
              className=" bg-fuchsia-600 text-white py-2 text-center w-[100%] text-md rounded-md mb-5"
              onClick={() => resetApp()}
            >
              Resetear App
            </button>
          </div>
          <p className="dark:text-white text-neutral-900 text-4xl my-5">
            <span className="font-bold">Presupuesto:</span>{" "}
            {formateo(presupuesto)}
          </p>
          <p className="dark:text-white text-neutral-900 text-4xl my-5">
            <span className="font-bold">Disponible:</span>{" "}
            {formateo(disponible)}
          </p>
          <p className="dark:text-white text-neutral-900 text-4xl my-5">
            <span className="font-bold">Utilizado:</span> {formateo(utilizado)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresupuestoValido;
