import React from 'react';
import "./ProductDetails.css"


const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ProductDetails;
