import React from 'react';
import './productCarousel.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

const ProductCarousel = () => {
  const rawProducts = useSelector(state => state.cart.dataBreads);
  const products = rawProducts.flat().slice(1); // Ignoramos el primer producto antes de ordenar
  const productCounts = useSelector(state => state.cart.productCounts); 
   console.log(rawProducts)
  const sortedProducts = [...products].sort((a, b) => {
    const countA = productCounts[a.name] || 0;
    const countB = productCounts[b.name] || 0;
    return countB - countA;
  });

  const selectedProducts = sortedProducts.slice(0, 6); // Ahora mostramos los primeros 6 productos después de ordenar

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div  className="product-carousel" >
      <h2 className="carousel-title">Productos más populares</h2>
      <Slider {...settings}>
        {selectedProducts.map((product) => (
          <div key={product.name}   className="product-item"  >
            <Link to={`/product/${product.name}`}   className="product-details-link"  >
            <img src={product.image} alt={product.name} className='img'/>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
