import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { filterType, filterWeight, allBreads, orderalph,filterCombined } from '../reducers/cartReducer';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();
  const [selectedType, setSelectedType] = useState("Ninguno");
  const [selectedWeight, setSelectedWeight] = useState("Ninguno");

  const handleTypeClick = (type) => {
    setSelectedType(type); 
  };
  const handleWeightClick = (weight) => {
    setSelectedWeight(weight);
  };
  useEffect (() => {
      dispatch(filterCombined([selectedType, selectedWeight]));
  }, [selectedType, selectedWeight]);
  const handleClickO = (type) => {
    dispatch(orderalph(type));
  };

  const authorizedEmails = ["dariocordoneda@gmail.com","londerogerardo@gmail.com", "mateoc73x3@gmail.com"];
  const isAuthorized = isAuthenticated && user && authorizedEmails.includes(user.email);

  return (
    <div className="header__navigation-bar navbar navbar-light bg-light">
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Ordenar Por</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item" onClick={() => handleClickO("A - Z")}>A-Z</button>
          <button className="header__dropdown-item dropdown-item"onClick={() => handleClickO("Z - A")}>Z-A</button>
  
        </div>
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros tipo de pan</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item"onClick={() => handleTypeClick("salty")}>Salado</button>
          <button className="header__dropdown-item dropdown-item" onClick={() => handleTypeClick("sweet")}>Dulce</button>
          <button className="header__dropdown-item dropdown-item"onClick={() => handleTypeClick("integral")}>Integral</button>
          <button className="header__dropdown-item dropdown-item" onClick={() => handleTypeClick("Ninguno")}>Ninguno</button>
        </div>
      </div>
      <div className="header__dropdown">
        <span className="header__all nav-link dropdown-toggle" data-bs-toggle="dropdown">Filtros Peso de pan</span>
        <div className="header__dropdown-content dropdown-menu">
          <button className="header__dropdown-item dropdown-item" onClick={() => handleWeightClick("Ninguno")}>Ninguno</button>
          <button className="header__dropdown-item dropdown-item" onClick={() => handleWeightClick("1kg")}>1kg</button>
          <button className="header__dropdown-item dropdown-item" onClick={() => handleWeightClick("1.5kg")}>1.5kg</button>
          <button className="header__dropdown-item dropdown-item" onClick={() => handleWeightClick("2kg")}>2kg</button>
        </div>
      </div>
      <button className="header__button btn btn-primary" onClick={() => {setSelectedType("Ninguno");  setSelectedWeight("Ninguno"); dispatch(allBreads(""))}}>Reiniciar Filtros</button>

      {isAuthorized && (
        <Link to="/form"> 
          <button className="header__button btn btn-primary">Crear un nuevo producto</button>
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
