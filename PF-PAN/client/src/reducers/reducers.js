
import { combineReducers } from 'redux';


import productReducer from './productReducer';
import stripeReducer from './stripeReducer';
import cartReducer from './cartReducer';





const rootReducer = combineReducers({

  newProducts: productReducer,
  cart: cartReducer,
  stripe: stripeReducer
});

export default rootReducer;
