import React from 'react';
import ProductList from '../components/ProductList';
import ProductCarousel from '../components/ProductCarousel';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <h2>BUSQUEDA</h2>
      <ProductList />
      <h2>PRODUCTOS MAS VENDIDOS</h2>
      <ProductCarousel />
    </div>
  );
};

export default HomeContainer;
