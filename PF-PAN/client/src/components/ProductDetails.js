import React from "react";
import { Link } from "react-router-dom";
import product from "../data";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div>
        <Link to="/">
          <button>BACK</button>
        </Link>
      </div>
      {/* <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      Otros detalles del producto */}
      {product.map((product) => (
        <div>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Ingredients: {product.ingredients.join(", ")}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
