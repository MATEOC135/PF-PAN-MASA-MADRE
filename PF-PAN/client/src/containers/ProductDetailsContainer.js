import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsContainer = () => {
  const { productId } = useParams();

  

  // Ejemplo de datos de producto
  const product = {
    id: productId,
    name: 'Producto 1',
    price: 19.99,
    description: 'Descripción del producto',
    // Otros detalles del producto
  };

  return (
    <div className="product-details-container">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsContainer;
