import React from 'react';
import ProductList from '../components/ProductList';
import ProductCarousel from '../components/ProductCarousel';

const HomeContainer = () => {
  return (
    <div className="home-container">
     
      <ProductCarousel />
      <br/>
      <ProductList />
    </div>
  );
};

export default HomeContainer;
