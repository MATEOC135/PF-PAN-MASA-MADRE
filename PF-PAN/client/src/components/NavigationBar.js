import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { useDispatch } from 'react-redux';
import { filterType, filterWeight } from '../reducers/cartReducer';


const NavigationBar = () => {
  const dispatch =useDispatch()
  const handleClick= (type)=>{
    dispatch(filterType(type))
  }
  const handleClickW= (type)=>{
    dispatch(filterWeight(type))
  }
  return (
    <div className="header__navigation-bar navbar navbar-light bg-light">
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Ordenamientos</span>
        <div className="header__dropdown-content dropdown-menu">
          <span className="header__dropdown-item dropdown-item">A-Z</span>
          <span className="header__dropdown-item dropdown-item">Z-A</span>
          <span className="header__dropdown-item dropdown-item"></span>
          <span className="header__dropdown-item dropdown-item">Precio Menor</span>
          <span className="header__dropdown-item dropdown-item">Más Vendidos</span>
          <button className="header__dropdown-item dropdown-item">boton del action</button>
        </div>
        
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros tipo de pan</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClick("salty")} >Salado</button>    
          <button className="header__dropdown-item dropdown-item"  onClick={()=>handleClick("sweet")}>Dulce</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClick( "integral")}>Integral</button>
        </div>
        
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros Peso de pan</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("1kg")}>1kg</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("1.5kg")}>1.5kg</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("2kg")}>2kg</button>
        </div>
        
      </div>
      <button className="header__button btn btn-primary">Ofertas del Día</button>
      <button className="header__button btn btn-primary">Comprar de Nuevo</button>
    </div>
  );
};

export default NavigationBar;
