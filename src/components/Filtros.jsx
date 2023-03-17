import { useGastosContext } from "../context/GastoContext";

const Filtros = () => {
  const { filtro, setFiltro } = useGastosContext();
  return (
    <div className="my-10">
      <form>
        <div className="w-[100%] text-center">
          <label
            htmlFor="categoria"
            className="text-4xl text-neutral-800 dark:text-neutral-300 font-bold block text-center mb-2"
          >
            Filtrar Gastos
          </label>
          <select
            id="categoria"
            value={filtro}
            className="w-2/3 rounded-md text-center py-2 bg-neutral-300"
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
