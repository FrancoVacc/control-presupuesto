import { useGastosContext } from "../context/GastoContext";

const Filtros = () => {
  const { filtro, setFiltro } = useGastosContext();
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="categoría">Filtrar Gastos</label>
          <select
            id="categoria"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
