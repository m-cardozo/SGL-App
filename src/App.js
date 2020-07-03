import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Logo from './Icons/Sticraf.svg';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/" className="logo">
            <img src={Logo} alt="SGL" className="logo-img" />
            <div className="logo-text">SGL</div>
          </Link>

          <ul className="items">
            <li><Link to="/expenses">Gastos</Link></li>
            <li><Link to="/travels">Viajes</Link></li>
            <li><Link to="/localities">Localidades</Link></li>
            <li><Link to="/users">Usuarios</Link></li>
            <li><Link to="/customers">Clientes</Link></li>
            <li><Link to="/providers">Proveedores</Link></li>
            <li><Link to="/vehicles">Vehiculos</Link></li>
            <li><Link to="/trailers">Remolques</Link></li>
            <li><Link to="/maintenance">Mantenimiento</Link></li>
          </ul>
        </nav>

        <header>
          <div className="user-name">Laura Duran</div>
        </header>

        <Switch>
          <Route path="/" exact>
            <main>
              <div className="welcome">Sistema de Gestión Logística</div>
            </main>
          </Route>
          <Route path="/expenses"></Route>
          <Route path="/travels"></Route>
          <Route path="/localities"></Route>
          <Route path="/users"></Route>
          <Route path="/customers"></Route>
          <Route path="/providers"></Route>
          <Route path="/vehicles"></Route>
          <Route path="/trailers"></Route>
          <Route path="/maintenance"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;