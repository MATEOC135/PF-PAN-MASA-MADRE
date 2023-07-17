import React from "react";
import "./ProductList.css";
import product from "../data";
import { Link } from "react-router-dom";

const ProductList = () => {
  // Datos de ejemplo para la lista de productos
  // const products = [
  //   { id: 1, name: "Producto 1", price: 19.99, image: "product-image-1.jpg" },
  //   { id: 2, name: "Producto 2", price: 29.99, image: "product-image-2.jpg" },
  //   { id: 3, name: "Producto 3", price: 39.99, image: "product-image-3.jpg" },
  //   // Otros productos
  // ];

  return (
    <div className="product-list">
      {/* {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Agregar al carrito</button>
        </div>
      ))} */}
      {product.map((product) => (
        <div>
          <Link to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
          </Link>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
