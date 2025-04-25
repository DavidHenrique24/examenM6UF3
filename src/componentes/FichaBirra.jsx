export function FichaBirra({ cerveza }) {
  if (!cerveza) return null; // Si no hay cerveza no se renderiza

  return (
    <div className="col-12 border p-3">
      <div className="d-flex">
        <div className="w-50">
          <img
            src={cerveza.imagen}
            alt={cerveza.nombre}
            className="imagen-cerveza" 
          />
        </div>
        <div>
          <h4>{cerveza.nombre}</h4>
          <p>{cerveza.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
