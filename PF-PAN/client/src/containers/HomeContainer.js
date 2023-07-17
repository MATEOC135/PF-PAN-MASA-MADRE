import React from 'react';
import ProductList from '../components/ProductList';
import ProductCarousel from '../components/ProductCarousel';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <h2>Productos destacados</h2>
      <ProductCarousel />
      <h2>Productos populares</h2>
      <ProductList />
    </div>
  );
};

export default HomeContainer;
