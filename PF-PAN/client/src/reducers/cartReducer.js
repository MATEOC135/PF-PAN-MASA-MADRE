// cartReducer.js
import axios from "axios";

// Definir los tipos de acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ALL_BREADS = "ALL_BREADS"
const FILTER_TYPE ="FILTER_TYPE"
const FILTER_WEIGHT = "FILTER_WEIGHT"
// Estado inicial
const initialState = {
  items: [],
  dataBreads:[],
  dataBreadsCF:[],
};

// Reducer del carrito
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BREADS:
      return {
        ...state,
        dataBreads: [action.payload],
        dataBreadsCF: [action.payload],
      };
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
      ///////////////////////// FILTROS DE TIPO///////////////
    case FILTER_TYPE:

      const filteredItemsT = state.dataBreadsCF.flat().filter((item) => {
        const hasType = item.type && item.type === action.payload;
        console.log(action.payload)
        const hasTypes = item.types && item.types.some((type) => type.name.includes(action.payload));
       console.log(hasTypes)
       
        return hasType || hasTypes;
      }); 
      console.log(filteredItemsT)
      
        return  {
            ...state,
            dataBreads: [...filteredItemsT]
          };
                ///////////////////////// FILTROS DE PESO///////////////
   case FILTER_WEIGHT:

   const filteredItems = state.dataBreadsCF.flat().filter((item) => {
    const hasTypes = item.weight && item.weight === action.payload;
    console.log(action.payload)
    const hasTypess = item.weights && item.weights.some((type) => type.name.includes(action.payload));
   console.log(hasTypes)
   
    return hasTypess || hasTypes;
  }); 
  console.log(filteredItems)
  
    return  {
        ...state,
        dataBreads: [...filteredItems]
      };
   
    default:
      return state;
  }
};

// Acción para agregar un producto al carrito
export function allBreads(bread) {  
  return  async function (dispatch){
    
    try {
      const {data} = await axios.get(`http://localhost:3001/client?name=${bread}`)
  
      dispatch({type:ALL_BREADS,payload: data})
      
    } catch (error) {
      window.alert(error)
      
    }
  
  
  }

}

export const filterType = (type) => ({
  type: FILTER_TYPE,
  payload: type,
});
export const filterWeight = (type) => ({
  type: FILTER_WEIGHT,
  payload: type,
});





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
