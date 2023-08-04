import { ADD_PRODUCT, GET_PRODUCTS } from '../actions/productActions';

const initialState = {
  products: [],
  
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    default:
      return state;
  }
}
