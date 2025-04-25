import './App.css'
import { Header } from './componentes/header'
import { Usuarios } from './componentes/Usuarios'
import { Routes, Route } from 'react-router-dom'
import { Camareros } from './componentes/Camareros'
import { NuevoPedido } from './componentes/NuevoPedido'
import { FichaBirra } from './componentes/fichaBirra'
import { TablaPedidos } from './componentes/TablaPedidos'

function App() {
  return (
    <>
      <Header />
      <main className="container my-4 pt-3">
        <Routes>
          <Route path="/camareros" element={<Camareros />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/nuevoPedido" element={<NuevoPedido />} />
          <Route path="/fichaBirra" element={<FichaBirra />} />
          <Route path="/tablaPedidos" element={<TablaPedidos />} />
        </Routes>
      </main>

      <footer >
      </footer>
    </>
  )
}


export default App
