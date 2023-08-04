
import axios from "axios";

//tipos de acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ALL_BREADS = "ALL_BREADS"
const FILTER_TYPE ="FILTER_TYPE"
const FILTER_WEIGHT = "FILTER_WEIGHT"
const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT'; 

// Estado inicial
const cartFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  items: cartFromLocalStorage || [],
  dataBreads:[],
  dataBreadsCF:[],
  dataAux:[],
  dataAuxW:[],
  productCounts: {}, // Añadimos este objeto al estado inicial
};

// Reducer del carrito
const cartReducer = (state = initialState, action) => {
  console.log('action', action); 
  let newState;
  switch (action.type) {
    case ALL_BREADS:
      return {
        ...state,
        dataBreads: [action.payload],
        dataBreadsCF: [action.payload],
        dataAux:[],
      };
    case ADD_TO_CART:
      const itemInCart = state.items.find((item) => item.name === action.payload.name);
      if (itemInCart) {
        itemInCart.quantity += 1;
        newState = { ...state, items: [...state.items] };
      } else {
        const item = action.payload;
        newState = { ...state, items: [...state.items, { ...item, quantity: 1 }]};
      }
      localStorage.setItem('cartItems', JSON.stringify(newState.items));
      return newState;

    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find((item) => item.name === action.payload);
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
        newState = { ...state, items: [...state.items] };
      } else {
        newState = { ...state, items: state.items.filter((item) => item.name !== action.payload) };
      }
      localStorage.setItem("cartItems", JSON.stringify(newState.items));
      return newState;

    case INCREMENT_PRODUCT_COUNT: // Aquí gestionamos la nueva acción
      const newProductCounts = { ...state.productCounts };
      if (newProductCounts[action.payload]) {
        newProductCounts[action.payload]++;
      } else {
        newProductCounts[action.payload] = 1;
      }
      return { ...state, productCounts: newProductCounts };

    


 
 
                ///////////////////////// FILTROS DE PESO///////////////
   case FILTER_WEIGHT:
    if (state.dataAux.length>0) {
      if (action.payload === "Ninguno") {
        const aux = state.dataAux
        return{
          ...state,
          dataBreads: [...aux]
        
        };
      } else {
        const filterCom = state.dataAux.flat().filter((item) => {
          const hasTypes = item.weight && item.weight === action.payload;
          console.log(action.payload)
          const hasTypess = item.weights && item.weights.some((type) => type.name.includes(action.payload));
         console.log(hasTypes)
          return hasTypess || hasTypes;
        }); 
        return  {
          ...state,
          dataBreads: [...filterCom],
        
        };
      }


    } else {
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
            dataBreads: [...filteredItems],
            dataAuxW:[...filteredItems],
          };
      
    }

 
   
    default:
      return state;
  }
};

// Acción para agregar un producto al carrito
export function allBreads(bread) {  
  return  async function (dispatch){
    
    try {
      const {data} = await axios.get(`/client?name=${bread}`)
  
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
