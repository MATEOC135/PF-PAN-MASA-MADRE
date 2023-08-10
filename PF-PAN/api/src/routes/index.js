const { Router } = require('express');


const handlerClient = require("../handlers/HandlerClient")

const router = Router();


router.use("/client",handlerClient)

const stripeRoutes = require('../handlers/HandlerStripe');

router.use('/stripe', stripeRoutes);

const userRoutes = require('../routes/userRoutes');

router.use('/users', userRoutes);

// Configurar los routers  
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
