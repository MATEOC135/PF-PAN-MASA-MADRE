const { Router } = require('express');


const handlerClient = require("../handlers/HandlerClient")

const router = Router();


router.use("/client",handlerClient)

const stripeRoutes = require('../handlers/HandlerStripe');

router.use('/stripe', stripeRoutes);

// Configurar los routers  
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
