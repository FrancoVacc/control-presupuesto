import React from "react";

const Gasto = ({ gasto }) => {
  const { id, name, categoria, cantidad } = gasto;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{categoria}</p>
      <p>{cantidad}</p>
    </div>
  );
};

export default Gasto;
