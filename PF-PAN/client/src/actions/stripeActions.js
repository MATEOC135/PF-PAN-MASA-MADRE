import axios from "axios";


export const processPayment = (totalPrice) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('stripe/create-payment-intent', { amount: totalPrice * 100 });  // Convertir el precio a centavos
        if (response.data.clientSecret) {
          return { clientSecret: response.data.clientSecret };
        } else {
          console.error("Error al obtener clientSecret:", response.data);
          return { error: response.data.message || "Error al obtener clientSecret" };
        }
      } catch (error) {
        console.error("Error al hacer la petición:", error);
        return { error: error.message };
      }
    };
  };
  