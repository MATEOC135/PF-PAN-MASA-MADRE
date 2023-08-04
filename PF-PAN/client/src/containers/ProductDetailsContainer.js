import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import axios from 'axios';

const ProductDetailsContainer = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/client?name=${name}`);
        if(response.data) {
          setProduct(...response.data);
        }
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      }
    };

    fetchProduct();
  }, [name]);

  return (
    <div className="product-details-container">
      {product ? <ProductDetails product={product} /> : "Loading..."}
    </div>
  );
};

export default ProductDetailsContainer;
