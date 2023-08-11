
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { filterType, filterWeight, allBreads, orderalph,filterCombined } from '../reducers/cartReducer';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("Ninguno");
  const [selectedWeight, setSelectedWeight] = useState("Ninguno");


  const { user } = useAuth0(); // Obtener la información del usuario logueado
  const loggedAuth0ID = user?.sub;
  
  // Estado para el usuario actual
  const [currentUser, setCurrentUser] = useState(null);

  // Cargar la información del usuario actual al montar el componente
  useEffect(() => {
    if (loggedAuth0ID) {
        fetch('https://pan-4dg1.onrender.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                return response.json();
            })
            .then(data => {
                const loggedInUser = data.find(user => user.auth0_id === loggedAuth0ID);
                console.log(loggedInUser);
                setCurrentUser(loggedInUser);
            })
            .catch(error => {
                console.error("Error fetching user data: ", error);
            });
    }
}, [loggedAuth0ID]);



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



  return (
    <div className="header__navigation-bar navbar navbar-light bg-light">
      {/* Renderizar condicionalmente el botón Dashboard */}
      {currentUser && currentUser.admin && (
        <Link to="/admin">
          <button className="header__button btn btn-primary">Dashboard</button>
        </Link>
      )}
      
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



      {/* Renderizar condicionalmente el botón de Crear un nuevo producto */}
      {currentUser && currentUser.admin && (
        <Link to="/form"> 
          <button className="header__button btn btn-primary">Crear un nuevo producto</button>
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
