import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductDetails.css"

const ProductDetails = ({ product }) => {
  console.log(product)
  return (
    <div className="product-details">
      <div className="product-details-image-desc">
        {product.image && <div className="product-details-image"><img src={product.image} alt={product.name}/></div>}
        {product.description && <p className="product-description"><strong> Descripcion:</strong> <span>{product.description}</span></p>}
      </div>
      <div className="product-details-info">
        <h2 className="product-name">{product.name}</h2>
        {product.type && <p className="product-type"><strong>Tipo:</strong>{product.type}</p>}
        {product.price && <p className="product-price">Precio: {product.price}</p>}
      </div>
      <Link to="/cart">
        <button className="cart-button">Agregar al Carrito</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
