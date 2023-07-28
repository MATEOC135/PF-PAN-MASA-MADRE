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
  dataAux:[],
  dataAuxW:[],
};

// Reducer del carrito
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BREADS:
      return {
        ...state,
        dataBreads: [action.payload],
        dataBreadsCF: [action.payload],
        dataAux:[],
  
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

      if (state.dataAuxW.length >0) {
        if (action.payload=== "Ninguno") {
          return   {
            ...state,
            dataBreads: [...state.dataAuxW] 
          };
          
        } else {
          const filterComb= state.dataAuxW.filter((item)=> {
            const hasType = item.type && item.type === action.payload;
            console.log(action.payload)
            const hasTypes = item.types && item.types.some((type) => type.name.includes(action.payload));
           console.log(hasTypes)
           
            return hasType || hasTypes; 
  
          })
          return  {
            ...state,
            dataBreads: [...filterComb] 
          };
          
        }
   
        
        
      } else {
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
              dataBreads: [...filteredItemsT],
              dataAux:[...filteredItemsT]
            };

        
      }
 
 
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
