// cartReducer.js

// Definir los tipos de acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Estado inicial
const initialState = {
  items: [],
};

// Reducer del carrito
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

// Acción para agregar un producto al carrito
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Acción para eliminar un producto del carrito
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Acción para limpiar el carrito
export const clearCart = () => ({
  type: CLEAR_CART,
});

export default cartReducer;
