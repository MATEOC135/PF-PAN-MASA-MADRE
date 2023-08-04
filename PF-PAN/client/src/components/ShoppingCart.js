import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import './ShoppingCart.css';

const ShoppingCart = () => {
  console.log('ShoppingCart se está renderizando');
  const dispatch = useDispatch();
  const history = useHistory(); // Instancia useHistory
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
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

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">Carrito de compras</h2>
      <h2 className="cart-counter">Items en el carrito: {cartItems ? cartItems.length : 0}</h2>
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
        <button className="cart-checkout-button">Pagar</button>
      </div>
      <button onClick={handleContinueShopping} className="continue-shopping-button">SEGUIR COMPRANDO</button>
    </div>
  );
};

export default ShoppingCart;
