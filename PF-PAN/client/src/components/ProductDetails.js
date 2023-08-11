import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions'; 
import "./ProductDetails.css"
import { useAuth0 } from '@auth0/auth0-react';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isAuthenticated} = useAuth0()

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    if (isAuthenticated) {
      history.push('/cart');;
  } else {
      alert("Por favor, inicia sesión para continuar con la compra."); 
  }
  }


   

  console.log(product);
  return (
    <div className="product-details">
      <div className="product-details-image-desc">
        {product.image && <div className="product-details-image"><img src={product.image} alt={product.name}/></div>}
        {product.description && <p className="product-description"><strong> Descripcion:</strong> <span>{product.description}</span></p>}
      </div>
      <div className="product-details-info">
        <h2 className="product-name">{product.name}</h2>
        {product.type && <p className="product-type"><strong>Tipo: </strong>{product.type}</p>}
        {product.price && <p className="product-price">Precio: {product.price}</p>}
      </div>
      <button onClick={handleAddToCart} className="cart-button">Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetails;
