import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Logo from './Icons/Sticraf.svg';
import Localities from './Pages/Localities';
import Users from './Pages/Users';
import Customers from './Pages/Customers';
import Providers from './Pages/Providers';
import Vehicles from './Pages/Vehicles';

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
          <Route path="/expenses" />
          <Route path="/travels" />
          <Route path="/localities" component={Localities} />
          <Route path="/users" component={Users} />
          <Route path="/customers" component={Customers} />
          <Route path="/providers" component={Providers} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/trailers"></Route>
          <Route path="/maintenance"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;