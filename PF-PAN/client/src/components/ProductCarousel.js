import React, { useEffect, useState } from 'react';
import './productCarousel.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const ProductCarousel = () => {
  const [set, setSet] = useState ([]);
     const seta = async()=>{
      const bread=""
      try {
        const {data} =  await axios.get(`/client?name=${bread}`)
        console.log(data)
        if (data.message) {
          alert("There are no products with this name")
        }else{ 
          const aux = data.slice(0,8) 
          console.log("esto es get",data)
        setSet(aux)}
      } catch (error) {
        window.alert(error)
      }
    }
  useEffect(() => {
    setTimeout(() => {
      seta()
    }, 1700)
  }, []);


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
      <h2 className="carousel-title">Popular Products</h2>
      <Slider {...settings}>
        {set.map((product) => (
          <div key={product.name}   className="product-item"  >
            <Link to={`/product/${product.name}`}   className="product-details-link"  >
            <img src={product.image} alt={product.name} className='img'/>
            </Link>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;