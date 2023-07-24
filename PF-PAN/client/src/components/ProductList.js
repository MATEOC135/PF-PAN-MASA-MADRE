import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import { useSelector } from 'react-redux';

const ProductList = () => {
  // Datos de ejemplo para la lista de productos
 const products =useSelector(state => state.cart.dataBreads)
 const [prooducts,setProoducts]= useState([])
 useEffect(()=>{
  setProoducts(products)
  
},[products])
 



  return (
    <div className="product-list">
      {products.flat().map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
