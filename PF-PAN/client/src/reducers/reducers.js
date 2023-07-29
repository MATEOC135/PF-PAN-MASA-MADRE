import { combineReducers } from 'redux';

// Importa reducers individuales 

import cartReducer from './cartReducer';
import productReducer from './productReducer';


// Combina los reducers en un reducer raíz
const rootReducer = combineReducers({

  cart: cartReducer,
  products: productReducer,
  
});

export default rootReducer;
