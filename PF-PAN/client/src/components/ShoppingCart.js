import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import './ShoppingCart.css';
import PaymentComponent from './PaymentComponent';
import { useAuth0 } from '@auth0/auth0-react';



const ShoppingCart = (props) => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(state => state.cart.items);
  const {isAuthenticated} = useAuth0()
  


  useEffect(() => {
    if (!isAuthenticated) {
      dispatch({ type: 'CLEAR_CART' }); 
    }
  }, [isAuthenticated, dispatch]);
  
  const total = cartItems 
  ? cartItems.reduce((sum, item) => {
      if(item.price){
          return sum + item.quantity * parseFloat(item.price.replace('$', ''));
      } else {
          return sum;
      }
  }, 0)
  : 0;

  console.log("Carrito de compras:", cartItems);
  
  // Función para manejar el clic en el botón SEGUIR COMPRANDO
  const handleContinueShopping = () => {
    history.push('/'); // Redirige a la página de inicio
  };

  

  const handlePaymentClick = () => {
    
        history.push("/payment");
    
};

  


return (
  <div className="shopping-cart">
    <h2 className="cart-title">Carrito de compras</h2>
    <h2 className="cart-counter">Items en el carrito: {cartItems ? cartItems.length : 0}</h2>
    
    {isAuthenticated ? (
      <>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: {item.price}</p>
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.name })}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={handlePaymentClick} className="cart-checkout-button">Pagar</button>
        </div>
      </>
    ) : (
      <p>Por favor, inicie sesión para ver y gestionar su carrito.</p>
    )}
    
    <button onClick={handleContinueShopping} className="continue-shopping-button">SEGUIR COMPRANDO</button>
  </div>
);

};

export default ShoppingCart;
