// Acción para agregar un producto al carrito
export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  // Acción para eliminar un producto del carrito
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
  // Acción para vaciar el carrito
  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };
  