import React from "react";

const Gasto = ({ gasto }) => {
  const { id, nombre, categoria, cantidad } = gasto;
  return (
    <div>
      <p>{id}</p>
      <p>{nombre}</p>
      <p>{categoria}</p>
      <p>{cantidad}</p>
    </div>
  );
};

export default Gasto;
