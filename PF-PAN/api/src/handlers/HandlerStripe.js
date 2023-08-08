const { Router } = require('express');
const { createPaymentIntent } = require('../controllers/stripeController');

const router = Router();

router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;