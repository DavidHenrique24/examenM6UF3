import './App.css'
import { Header } from './componentes/header'
import { Usuarios } from './componentes/Usuarios'
import { Routes, Route } from 'react-router-dom'
import { Camareros } from './componentes/Camareros'
function App() {
  return (
    <>
      <Header />
      <main className="container my-4 pt-3">
        <Routes>
          <Route path="/camareros" element={<Camareros />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </main>

      <footer >
      </footer>
    </>
  )
}

export default App
