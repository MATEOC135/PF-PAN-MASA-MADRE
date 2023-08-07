


const BEGIN_PAYMENT = 'BEGIN_PAYMENT';
const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
const PAYMENT_FAILURE = 'PAYMENT_FAILURE';


const cartFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];



  const initialState = {
    items: cartFromLocalStorage || [],
  }

  const stripeReducer = (state = initialState, action) => {
    console.log('action', action); 
    switch (action.type) {


  case BEGIN_PAYMENT:
    return {
      ...state,
      paymentStatus: 'processing'
    };
  
  case PAYMENT_SUCCESS:
    localStorage.removeItem("cartItems");
    return {
      ...state,
      items: [],
      paymentStatus: 'success'
    };
  
  case PAYMENT_FAILURE:
    return {
      ...state,
      paymentStatus: 'failure'
    };

     default:
      return state;
  }

}





export default stripeReducer; 