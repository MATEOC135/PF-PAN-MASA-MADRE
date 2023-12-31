
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart } from '../actions/cartActions';
import "./ProductList.css"
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProductList = () => {

  const dispatch = useDispatch(); 
  const {isAuthenticated} = useAuth0()

  const rawProducts = useSelector(state => state.cart.dataBreads);
  const [products, setProducts] = useState(rawProducts.flat());
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6);


  
  useEffect(() => {
    setProducts(rawProducts.flat());
    setCurrentPage(1)
  }, [rawProducts]);

  const handleAddToCart = (product) => {
    console.log("action", addToCart(product)); 
    if (isAuthenticated) {
      dispatch(addToCart(product));
  } else {
      alert("Please log in to continue shopping."); 
  }
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage  ;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);  
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="pagination-container">  
        <ul className="pagination">
        <li className='nextPrev'>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
          {pages.map((page) => (
            <li>
              <button className={currentPage === page ? 'active' : ''} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            </li>
          ))}
          <li className='nextPrev'>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
        </ul>
      </div>
      <div className="product-list">
    {currentProducts.length > 0 ? (
    currentProducts.map((product) => (
      <div key={product.id} className="product">
        <Link to={`/product/${product.name}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          <h3 className='h3'>{product.name}</h3> 
          <p className='p'> Price: {product.weight || product.weights}</p>
          <p className='p'>Type: {product.type || product.types}</p>
        
        <button onClick={() => handleAddToCart(product)} className='agregarCarrito' >Agregar al carrito</button> 
      </div>
    ))
  ) : (
    <div className="no-products">
  
      <p className='bartolomia'><p align="center" width= "200px" height="120px"><a href="https://www.lowgif.com/0b6d8097effad4a8.html" target="_blank" align="center" ><img id="editableimage2" src="https://cdn.lowgif.com/full/0b6d8097effad4a8-burying-head-in-sand-gifs-find-share-on-giphy.gif" border="0" alt="burying head in sand gifs find share on giphy" /></a></p></p>
      <span className='bartolomia'>Not breads Bartolomiaawwwww</span>
    </div>
     )

    }
    </div>
    </div>
  )
    }



export default ProductList;
