import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { processPayment } from '../actions/stripeActions';
import './PaymentComponent.css';
import { useHistory } from 'react-router-dom';
import { clearCart } from '../actions/cartActions';
import emailjs from 'emailjs-com';



export default function PaymentComponent() {
  return (
    <div className="payment-component">
      <CheckoutForm />
    </div>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);  // Estado para el spinner
  const [cardHolderName, setCardHolderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState("");
  




  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems 
    ? cartItems.reduce((sum, item) => {
      return item.price
        ? sum + item.quantity * parseFloat(item.price.replace('$', ''))
        : sum;
    }, 0)
    : 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);  // Mostrar spinner

    const response = await dispatch(processPayment(totalPrice));
    if (!response || response.error) {
      console.error("Error creando PaymentIntent:", response.error);
      setLoading(false);  // Ocultar spinner
      return;
    }
    const { clientSecret } = response;
    console.log("clientSecret:", clientSecret);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: cardHolderName,
          email: email
        }
      }
    });

    if (result.error) {
      console.error("Error confirmando el pago:", result.error);
      setLoading(false);  // Ocultar spinner
      setMessage(result.error.message || "Ocurrió un error desconocido.");
    } else {
      console.log("Pago completado con éxito:", result.paymentIntent);
      sendEmail(); 
      alert("¡Payment completed successfully!");  // Añadido alerta para informar al usuario.
      dispatch(clearCart()); 
      setTimeout(() => {
        history.push("/");  // Navegar a otra página tras el éxito
      }, 2000);
    }
  }

  const sendEmail = () => {
    const templateParams = {
        to_name: cardHolderName,
        to_email: email,
        order_details: cartItems.map(item => `${item.name} (x${item.quantity})`).join(', '),
        order_amount: `$${totalPrice.toFixed(2)}`
    };

    emailjs.send('service_0gb9v58', 'template_m1mioto', templateParams, 'zqylgjgEzwXlvhen7')
        .then((response) => {
            console.log('Email successfully sent!', response);
        }, (error) => {
            console.error('There has been an error.  Here some thoughts on the error that occured:', error);
        });
}
 

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardHolderName">Name of owner:</label>
        <input type="text" id="cardHolderName" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div id="payment-element" className='tarjeta'>
        <CardElement />
      </div>
      
      <button type="submit" disabled={!stripe || loading}>
        {loading ? <div className="spinner"></div> : "Pagar"}
      </button>
      <br />
      <button type="button" onClick={() => history.push("/cart")}>Cancel</button>
      <div id="payment-message">
        {message}
      </div>
    </form>
  );
}
