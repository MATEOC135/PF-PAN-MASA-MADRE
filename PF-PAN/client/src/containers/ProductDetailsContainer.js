import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import axios from 'axios';
import './ProdutContainer.css'


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
      {product ? <ProductDetails product={product} /> : <p align="center" width= "200px" ><a href="https://www.lowgif.com/0b6d8097effad4a8.html" target="_blank" align="center" ><img id="editableimage2" src="https://cdn.lowgif.com/full/0b6d8097effad4a8-burying-head-in-sand-gifs-find-share-on-giphy.gif" border="0" alt="burying head in sand gifs find share on giphy" /></a></p>}
    </div>
  );                                                                                                                                                                        
                                     
};

export default ProductDetailsContainer;
