import React from "react";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useGastosContext } from "../context/GastoContext";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({ gasto, handleModal }) => {
  const { setGastoEditar, setGastos, gastos } = useGastosContext();
  const { name, categoria, cantidad, fecha } = gasto;
  const imgCategoria = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
  };

  const handleEditar = () => {
    setGastoEditar({ ...gasto });
    handleModal();
  };

  const handleEliminar = () => {
    const deleteGastos = gastos.filter((item) => item.id !== gasto.id);

    setGastos(deleteGastos);
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => handleEditar()}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => handleEliminar()}>Eliminar</SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="flex gap-2 justify-between items-center bg-neutral-200 shadow-md dark:bg-neutral-900 w-[100%] px-10 py-5 rounded-md mb-10">
          <div className="flex gap-2 items-center">
            <img
              src={imgCategoria[categoria]}
              alt="icono gasto"
              className="md:h-[25%] md:w-[25%] hidden md:block"
            />
            <div className="flex flex-col gap-2">
              <p className=" text-neutral-800 dark:text-neutral-300 text-6xl">
                {categoria}
              </p>
              <p className=" text-neutral-800 dark:text-neutral-300 text-4xl">
                {name}
              </p>
              <p className=" text-neutral-800 dark:text-neutral-300 text-2xl">
                Agregado el: <span>{fecha}</span>
              </p>
            </div>
          </div>
          <p className=" text-neutral-800 dark:text-neutral-300 font-black text-5xl">
            ${cantidad}
          </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
