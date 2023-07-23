import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="header__navigation-bar navbar navbar-light bg-light">
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">All</span>
        <div className="header__dropdown-content dropdown-menu">
          <span className="header__dropdown-item dropdown-item">A-Z</span>
          <span className="header__dropdown-item dropdown-item">Z-A</span>
          <span className="header__dropdown-item dropdown-item">Precio Mayor</span>
          <span className="header__dropdown-item dropdown-item">Precio Menor</span>
          <span className="header__dropdown-item dropdown-item">Más Vendidos</span>
        </div>
      </div>
      <button className="header__button btn btn-primary">Ofertas del Día</button>
      <button className="header__button btn btn-primary">Comprar de Nuevo</button>     
      <Link to= "/form"> <button className="header__button btn btn-primary">Crear un nuevo producto</button></Link>
    </div>
  );
};

export default NavigationBar;
