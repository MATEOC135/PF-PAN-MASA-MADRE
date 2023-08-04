import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart } from '../actions/cartActions';
import "./ProductList.css"
import { Link, useHistory } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch(); 
  const history = useHistory();

  const rawProducts = useSelector(state => state.cart.dataBreads);
  const [products, setProducts] = useState(rawProducts.flat());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  useEffect(() => {
    setProducts(rawProducts.flat());
  }, [rawProducts]);

  const handleAddToCart = (product) => {
    console.log("action", addToCart(product)); 
    dispatch(addToCart(product));
    //history.push('/cart');
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage + 1;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);  
  };

  return (
    <div>
      <div className="pagination-container">  
        <ul className="pagination">
          {pages.map((page) => (
            <li>
              <button className={currentPage === page ? 'active' : ''} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.name}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3> 
              <p>{product.weight || product.weights}</p>
              <p>{product.type || product.types}</p>
            </Link>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
