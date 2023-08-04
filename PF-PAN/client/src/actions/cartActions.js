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

    // Aquí agregamos la nueva acción
    dispatch({
      type: 'INCREMENT_PRODUCT_COUNT',
      payload: product.name,  // Aquí cambiamos a product.name
    });
  };
};
