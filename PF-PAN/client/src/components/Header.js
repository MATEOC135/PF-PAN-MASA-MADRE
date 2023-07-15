import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="navbar-brand">Logo de tu tienda</Link>
      </div>
      <div className="header__search">
        <input type="text" className="form-control" placeholder="Buscar productos" />
        <button className="btn btn-primary">Buscar</button>
      </div>
      <div className="header__actions">
        <Link to="/login" className="nav-link">Iniciar sesión</Link>
        <Link to="/cart" className="nav-link">
          <span className="header__cart-icon">Icono del carrito</span>
          <span className="header__cart-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
