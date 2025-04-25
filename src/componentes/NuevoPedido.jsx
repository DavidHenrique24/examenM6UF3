import bd from "../bd/bd"; // Asegúrate de que la ruta sea correcta
import { FichaBirra } from "./FichaBirra"; 
export function NuevoPedido() {
  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-6">
          <h3>Grupo</h3>
          <label htmlFor="nombreGrupo" className="label-control">Nombre del grupo:</label>
          <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />

          <label htmlFor="numeroMesa" className="label-control mt-3">Mesa número</label>
          <input type="number" className="form-control mt-2" placeholder="0" />

          <h3 className="mt-5">Haz tu pedido</h3>
          <div className="d-flex gap-3">
            <select name="cervezas" id="cervezas" className="form-control">
              <option value="">Selecciona qué birra quieres</option>
              {bd.map((birra) => (
                <option key={birra.id} value={birra.id}>
                  {birra.nombre} 
                </option>
              ))}
            </select>
            <input type="number" defaultValue="0" className="form-control" />
          </div>

          <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </div>
          <FichaBirra />
      
      </div>
    </div>
  );
}
