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
    <h2 className="cart-title">SHOPPING CART</h2>
    <h2 /* className="cart-counter" */>Items in the cart: {cartItems ? cartItems.length : 0}</h2>
    
    {isAuthenticated ? (
      <>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <h3 className='h3'>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div>
                  <p className='p'>Amount: {item.quantity}</p>
                  <p className='p'>Price: {item.price}</p>
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.name })}>Eliminate</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={handlePaymentClick} className="cart-checkout-button">Pay</button>
        </div>
      </>
    ) : (
      <p>Please login to view and manage your cart.</p>
    )}
    
    <button onClick={handleContinueShopping} className="continue-shopping-button">KEEP BUYING</button>
  </div>
);

};

export default ShoppingCart;
