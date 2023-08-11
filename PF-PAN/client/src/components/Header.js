import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import { allBreads } from "../reducers/cartReducer";
import { useAuth0 } from '@auth0/auth0-react';
import logoPagina from '../images/logoPagina.jpg'; 


const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();
    const [breadName, setBreadName] = useState("");
    const dispatch = useDispatch();

    const cartItemsCount = useSelector(state => state.cart.items.length);
    const actualCartItemsCount = isAuthenticated ? cartItemsCount : 0;

    useEffect(() => {
        onSearch("");
    }, []);

    useEffect(() => {
        if (isAuthenticated && user) {
            syncUserToBackend(user);
        }
    }, [isAuthenticated, user]);

    const syncUserToBackend = async (userInfo) => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch('https://pan-4dg1.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    auth0_id: userInfo.sub,
                   
                    name: userInfo.name || userInfo.nickname,
                    email: userInfo.email,
                    image: userInfo.picture,
                    phone: "Default",
                    address: 'Default Address', // valor predeterminado
                    token: 'Default Token', 
                    // otros campos si son necesarios
                }),
            });

            const data = await response.json();
            console.log('Usuario guardado:', data);
        } catch (error) {
            console.error('Error al sincronizar usuario:', error);
        }
    };

    const onSearch = (bread) => {
        return dispatch(allBreads(bread));
    };

    const handleSearch = (e) => {
        let { value } = e.target;
        setBreadName(value);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" className="navbar-brand"> { <img  src={logoPagina} alt="Logo" class="img-mediana" /> } </Link>
            </div>
            <div className="header__search">
                <input type="text" className="form-control" onChange={handleSearch} placeholder="Buscar productos" />
                <button onClick={() => onSearch(breadName)} className="btn btn-primary">Buscar</button>
            </div>
            <div className="header__actions">
                {isAuthenticated ? (
                    <>
                        <button  className="nav-link" onClick={() => logout()}>LOGOUT</button>

                        <Link to="/cart" className="nav-link cart-button">
                            <span className="header__cart-icon">CARRITO</span>
                            <span className="header__cart-count">{actualCartItemsCount}</span>
                        </Link>
                    </>
                ) : (<button className="nav-link" onClick={() => loginWithRedirect()}>LOGIN</button>)}
            </div>
        </header>
    );
};

export default Header;
