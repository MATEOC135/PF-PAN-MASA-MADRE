import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { filterType, filterWeight,allBreads } from '../reducers/cartReducer';


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
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Ordenar Por</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item">A-Z</button>
          <button className="header__dropdown-item dropdown-item">Z-A</button>
          <button className="header__dropdown-item dropdown-item"></button>
          <button className="header__dropdown-item dropdown-item">Precio Menor</button>
          <button className="header__dropdown-item dropdown-item">Más Vendidos</button>
          <button className="header__dropdown-item dropdown-item">boton del action</button>
        </div>
        
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros tipo de pan</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClick("salty")}>Salado</button>    
          <button className="header__dropdown-item dropdown-item"  onClick={()=>handleClick("sweet")}>Dulce</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClick( "integral")}>Integral</button>
          <button className="header__dropdown-item dropdown-item"  onClick={()=>dispatch(filterType( "Ninguno"))}>Ninguno</button>
        </div>
        
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros Peso de pan</span>
        <div className="header__dropdown-content dropdown-menu">
        <button className="header__dropdown-item dropdown-item" onClick={()=>dispatch(filterWeight( "Ninguno")) }>Ninguno</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("1kg")}>1kg</button>
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("1.5kg")}>1.5kg</button>
  
          <button className="header__dropdown-item dropdown-item" onClick={()=>handleClickW("2kg")}>2kg</button>
        </div>
        
      </div>
<<<<<<< HEAD
      {/* <button className="header__button btn btn-primary">Ofertas del Día</button>
      <button className="header__button btn btn-primary">Comprar de Nuevo</button>     */} 
       <Link to= "/form"> <button className="header__button btn btn-primary">Crear un nuevo producto</button></Link> 
=======
      <button className="header__button btn btn-primary"  onClick={()=>dispatch(allBreads(""))}>Reiniciar Filtros</button>

       
      <Link to= "/form"> <button className="header__button btn btn-primary">Crear un nuevo producto</button></Link> 

>>>>>>> 1dcea878ef2ce90b488b81ec737d49f49135b7ff
    </div>
  );
};

export default NavigationBar;
