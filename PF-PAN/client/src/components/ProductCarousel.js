


import React from 'react';
import './productCarousel.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSelector } from 'react-redux';

const ProductCarousel = () => {
  const products = useSelector(state => state.cart.dataBreads);
  const selectedProducts = (products.flat()).slice(0,6);

  




 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Habilitar el autoplay
    autoplaySpeed: 3000, // Velocidad
  };

  return (
    <div className="product-carousel">
      <h2 className="carousel-title">Productos</h2>
      <Slider {...settings}>
        {selectedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <Link to={`/product/${product.id}`} className="product-details-link">
              Ver detalles
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
