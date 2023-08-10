import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useDispatch, useSelector } from "react-redux"; // Importamos useSelector
import {allBreads} from "../reducers/cartReducer"
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0()
  const [breadName, setBreadName] = useState ("");
  const dispatch = useDispatch()

  // Usamos useSelector para obtener la cantidad de artículos en el carrito
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const actualCartItemsCount = isAuthenticated ? cartItemsCount : 0;

  function onSearch (bread){
    return  dispatch(allBreads(bread))
  }
  

  const handleSearch = (e) => {
    let { value } = e.target;
    setBreadName(value);
  }; 
  return (
    <header className="header">
      <div className="header__logo">
       <Link to="/" className="navbar-brand">MasterBakers</Link>
      </div>
      <div className="header__search">
        <input type="text" className="form-control" onChange={ handleSearch} placeholder="Buscar productos" />
        <button onClick={()=>onSearch(breadName)} className="btn btn-primary">Buscar</button>
      </div>
      <div className="header__actions">
        {isAuthenticated?(
          <>
        <button className="nav-link" onClick={()=> logout()}>LOGOUT</button>
        
        <Link to="/cart" className="nav-link cart-button">

          <span className="header__cart-icon">CARRITO</span>
          <span className="header__cart-count">{actualCartItemsCount}</span> {/* Usamos cartItemsCount aquí */}
        </Link>
        </>
  ):(<button className="nav-link" onClick={()=> loginWithRedirect()}>LOGIN</button> )}
      </div>
    </header>
  );
};

export default Header;
