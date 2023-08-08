const stripe = require("stripe")("sk_test_51NbpzDAXMAaaaz8xfnzNm77Fa0Vt3cSp121BuxuUkXPpUv00Pi2utFH2GxbIRC4DnzgdmKROY1ung3D0wSlPC1vg006IWGnimy");

const createPaymentIntent = async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,  // este es el monto total en centavos
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
              },
        });

        res.status(200).send({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createPaymentIntent };