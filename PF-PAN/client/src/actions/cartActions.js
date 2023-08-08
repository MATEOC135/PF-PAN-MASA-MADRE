



export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cart = getState().cart.items.slice();
    let alreadyInCart = false;

    cart.forEach((item) => {
      if (item.name === product.name) {  
        item.quantity++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cart.push({ ...product, quantity: 1 });
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

    
    dispatch({
      type: 'INCREMENT_PRODUCT_COUNT',
      payload: product.name,  
    });
  };
  
};


export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  };
};







  


