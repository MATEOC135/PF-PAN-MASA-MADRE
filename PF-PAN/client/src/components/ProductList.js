import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductList = () => {
  // Datos de ejemplo para la lista de productos
 const products =useSelector(state => state.cart.dataBreads)

 const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(6); 
 const [prooducts,setProoducts]= useState([])

 useEffect(()=>{
  
  setProoducts(products)
  
},[products])
const aux=prooducts.flat()
const totalPages = Math.ceil(aux.length / itemsPerPage)
useEffect(()=>{setCurrentPage(1)},[prooducts])
const pages = [];
for (let i = 1; i <= totalPages; i++) {
  pages.push(i);
}
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentProducts = prooducts.flat().slice(indexOfFirstItem, indexOfLastItem);
const handlePageChange = (pageNumber) => {
setCurrentPage(pageNumber);  
};

 
  return (
    <div>

<div className="pagination-container">  <ul  className="pagination">
    {pages.map((page) => (
      <li>
        <button   className={currentPage === page ? 'active' : ''}
         onClick={() => handlePageChange(page)}>{page}</button>
      </li>
    ))}
  </ul>
  </div>
      
       <div className="product-list">
      {currentProducts.map((product) => (
        <Link to={`/product/${product.id}`} ><div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3> 
        <p>${product.weight ||product.weights}</p>
        <p>${product.type ||product.types}</p>
        <button>Agregar al carrito</button>
      </div></Link>

      ))}
    </div>
    


    </div>
   
  );
};

export default ProductList;
