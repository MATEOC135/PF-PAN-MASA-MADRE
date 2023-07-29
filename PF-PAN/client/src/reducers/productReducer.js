import { ADD_PRODUCT } from '../actions/productActions';

const initialState = {
  newProducts: [],
  
};

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        newProducts: [...state.newProducts, action.product]
      };
    default:
      return state;
  }
};

export default productReducer;
