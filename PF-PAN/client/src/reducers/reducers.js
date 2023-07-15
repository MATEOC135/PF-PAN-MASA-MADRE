import { combineReducers } from 'redux';

// Importa reducers individuales 
import userReducer from './userReducer';
import cartReducer from './cartReducer';


// Combina los reducers en un reducer raíz
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  
});

export default rootReducer;
