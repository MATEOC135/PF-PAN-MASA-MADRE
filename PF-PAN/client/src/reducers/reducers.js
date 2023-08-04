// reducer.js
import { combineReducers } from 'redux';


import productReducer from './productReducer';

import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({

  newProducts: productReducer,
  cart: cartReducer
});

export default rootReducer;
