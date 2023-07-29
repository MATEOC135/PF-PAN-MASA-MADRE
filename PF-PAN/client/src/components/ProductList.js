import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductList = () => {
  // Seleccionamos los productos del estado
  const productsFromDB = useSelector(state => state.cart.dataBreads);
  const productsFromForm = useSelector(state => state.products.newProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 
  const [products,setProducts]= useState([])

  // Actualizamos el estado de los productos cada vez que cambian
  // los productos de la base de datos o los del formulario
  useEffect(() => {
    setProducts([...productsFromDB.flat(), ...productsFromForm.flat()]);
  }, [productsFromDB, productsFromForm]);

  const totalPages = Math.ceil(products.length / itemsPerPage)
  useEffect(() => { setCurrentPage(1) }, [products]);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);  
  };

  return (
    <div>
      <div className="pagination-container">
        <ul  className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <button   className={currentPage === page ? 'active' : ''}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3> 
              <p>Precio: ${product.price}</p>
              <p>Peso: ${product.weight || product.weights}</p>
              <p>Tipo: ${product.type || product.types}</p>
              <button>Agregar al carrito</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
