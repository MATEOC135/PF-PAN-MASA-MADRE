import axios from "axios";


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS'; 


export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:3001/client', product);
      dispatch(getProducts()); // obtenemos todos los productos después de crear uno
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/client');
      dispatch({ type: GET_PRODUCTS, products: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};


