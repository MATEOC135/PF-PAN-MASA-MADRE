import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useDispatch } from "react-redux";
import {allBreads} from "../reducers/cartReducer"
import { useSelector } from 'react-redux';

 
const Header = () => {
  const [breadName, setBreadName] = useState ("");
  const dispatch =useDispatch()

    function onSearch (bread){
    return  dispatch(allBreads(bread))
  }
  useEffect(()=>{
    onSearch("")
},[])


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
