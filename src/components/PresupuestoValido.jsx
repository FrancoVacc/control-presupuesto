const PresupuestoValido = ({ presupuesto, disponible, utilizado }) => {
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
