import './App.css'
import { Header } from './componentes/header'
import { Usuarios } from './views/Usuarios'
import { Routes, Route } from 'react-router-dom'
import { Camareros } from './views/Camareros'
import { NuevoPedido } from './componentes/NuevoPedido'
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
          <Route path="/tablaPedidos" element={<TablaPedidos />} />
        </Routes>
      </main>

      <footer >
      </footer>
    </>
  )
}


export default App
