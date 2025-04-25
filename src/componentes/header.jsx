import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-light py-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> 
          <Link className="navbar-brand" to="/">Examen David Henrique</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/camareros">Camareros</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
