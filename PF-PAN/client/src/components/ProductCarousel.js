


import React from 'react';
import './productCarousel.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 19.99, image: 'product-image-1.jpg' },
    { id: 2, name: 'Producto 2', price: 29.99, image: 'product-image-2.jpg' },
    { id: 3, name: 'Producto 3', price: 39.99, image: 'product-image-3.jpg' },
    { id: 4, name: 'Producto 4', price: 49.99, image: 'product-image-4.jpg' },
    { id: 5, name: 'Producto 5', price: 59.99, image: 'product-image-5.jpg' },
    { id: 6, name: 'Producto 6', price: 69.99, image: 'product-image-6.jpg' },
  ]

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
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
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
