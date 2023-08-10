
import { combineReducers } from 'redux';


import productReducer from './productReducer';

import cartReducer from './cartReducer';
import stripeReducer from './stripeReducer';




const rootReducer = combineReducers({

  newProducts: productReducer,
  cart: cartReducer,
  stripe: stripeReducer
});

export default rootReducer;
