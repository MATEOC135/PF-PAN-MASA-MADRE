import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2 className="cart-title">Carrito de compras</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            {/* Contenido del elemento del carrito */}
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: $100.00</p>
        <button className="cart-checkout-button">Pagar</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(ShoppingCart);
