
import { ADD_PRODUCT, GET_PRODUCTS } from '../actions/productActions';

const initialState = {
  products: [],
  newProducts: []
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
        newProducts: [...state.newProducts, action.product]
      };
    default:
      return state;
  }

}

