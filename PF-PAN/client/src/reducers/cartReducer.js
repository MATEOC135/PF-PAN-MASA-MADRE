
import axios from "axios";

//tipos de acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ALL_BREADS = "ALL_BREADS"
const FILTER_TYPE ="FILTER_TYPE"
const FILTER_WEIGHT = "FILTER_WEIGHT"
const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT'; 
const POST_BREADS = "POST_BREADS";
const ORDER_ALPH ="ORDER_ALPH"
const FILTER_COMBINED ="FILTER_COMBINED"


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
  valid:""
};

// Reducer del carrito
const cartReducer = (state = initialState, action) => {
 
  let newState;
  switch (action.type) {
    case POST_BREADS:
      return {
        ...state,
        valid: "Base de datos ya cargada"
        
      };
    case ALL_BREADS:
      return {
        ...state,
        dataBreads: [action.payload],
        dataBreadsCF: [action.payload],
        dataAux:[],
        dataAuxW:[]
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

    case INCREMENT_PRODUCT_COUNT: 
      const newProductCounts = { ...state.productCounts };
      if (newProductCounts[action.payload]) {
        newProductCounts[action.payload]++;
      } else {
        newProductCounts[action.payload] = 1;
      }
      return { ...state, productCounts: newProductCounts };

    
      case CLEAR_CART:
        return {
          ...state,
          items: []
        };
       ///////////////////////// FILTROS DE TIPO///////////////
       case FILTER_COMBINED:  // Nuevo caso de acción para filtros combinados

      const   [typeFilter, weightFilter]  = action.payload;
      console.log("aqui esta el payload", typeFilter, weightFilter)
     
      if(weightFilter === "Ninguno" && typeFilter === "Ninguno" ) {
        return {
          ...state,
        };
      }
      
      if (weightFilter !== "Ninguno" && typeFilter === "Ninguno" ) {
        let filterweight1 = state.dataBreadsCF.flat().filter((item) => {
          const hasWeight = item.weight && item.weight === weightFilter;
          return hasWeight
       
        });
        return  {
          ...state,
          dataBreads: [...filterweight1] 
        };
        
        
      } else if(weightFilter === "Ninguno" && typeFilter !== "Ninguno" ) {
       let filterType1=state.dataBreadsCF.flat().filter((item) => {
        const hasType = item.type && item.type === typeFilter;
        return hasType
      });
      return  {
        ...state,
        dataBreads: [...filterType1] 
      };
      
        
      }else{
        let filterp=state.dataBreadsCF.flat().filter((item) => {
          const hasType = item.type && item.type === typeFilter;
          return hasType
        });

        let filterComb =filterp.filter((item) => {
          const hasWeight = item.weight && item.weight === weightFilter;
          return hasWeight
       
        });


        return  {
          ...state,
          dataBreads: [...filterComb] 
        };
        

      }


      
      
   
    
      
    

       ///////////////////


      

  

    


 
 
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


    }

    case ORDER_ALPH:
      let state1 = state.dataBreads.flat()
      console.log(state1)
      let orderCards;
  if(action.payload === "A - Z"){
    orderCards =state1.sort((a, b) => a.name.localeCompare(b.name))
    console.log(orderCards, "aqui es no")
  }else{
    orderCards= state1.sort((a, b) => b.name.localeCompare(a.name))
 
  }return {
      ...state,
     dataBreads: [...orderCards]
    };    
   
    default:
      return state;
  }
};

// Acción para agregar un producto al carrito
export function allBreads(bread) {  
  return  async function (dispatch){
    
    try {
      const {data} = await axios.get(`/client?name=${bread}`)
      console.log(data)
      if (data.message) {
        alert("No existen productos con este nombre")
      }else{    dispatch({type:ALL_BREADS,payload: data})}
      
  
  
      
    } catch (error) {
      window.alert(error)
      
    }
  
  
  }

}
export function postData(bread) {  
  return  async function (dispatch){
    
    try {
      const {data} = await axios.post(`/client/data`,bread)
      console.log("|||||||||||||||||||||||||||||||||||")
      console.log("|||||||||||||||||||||||||||||||||||")
      console.log("|||||||||||||||||||||||||||||||||||")
      console.log(data)

      dispatch({type:POST_BREADS,payload: bread})
      
    } catch (error) {
      window.alert(error)
      
    }
  
  
  }

}

export const filterCombined = (type) => ({
  type: FILTER_COMBINED,
  payload: type,
});

export const filterType = (type) => ({
  type: FILTER_TYPE,
  payload: type,
});
export const filterWeight = (type) => ({
  type: FILTER_WEIGHT,
  payload: type,
});
export const orderalph = (type) => ({
  type: ORDER_ALPH,
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
