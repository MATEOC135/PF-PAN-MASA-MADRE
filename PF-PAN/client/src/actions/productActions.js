


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS'; 


export function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}


// Definir y exportar la función de acción getProducts
export function getProducts(products) {
  return { type: GET_PRODUCTS, products };
}

