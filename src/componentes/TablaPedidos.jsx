import React from 'react';
import pedidos from '../bd/pedidos';  // Importamos el array de pedidos

export function TablaPedidos() {
  return (
    <div id="tablaPedidos" className="container mt-5 mb-5 p-5 border shadow-lg">
      <div className="row">
        <h1 className="text-center mb-5">----- Vista camareros -----</h1>
        <h3>Pedidos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Grupo</th>
              <th>Mesa</th>
              <th>Cerveza</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido, index) => (
              <tr key={index}>
                <td>{index + 1}</td>  {/* Mostramos el índice + 1 para el id */}
                <td>{pedido.grupo}</td>
                <td>{pedido.numeroMesa}</td>
                <td>{pedido.cerveza}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button 
                      className={`btn btn-sm w-100 ${pedido.estado === 'pendiente' ? 'btn-outline-warning' : 'btn-outline-success'}`}
                    >
                      {pedido.estado === 'pendiente' ? 'Pedido pendiente...' : '¡Pedido servido!'}
                    </button>
                    <button className="btn btn-outline-danger w-100 btn-sm">
                      🗑 Borrar pedido
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
