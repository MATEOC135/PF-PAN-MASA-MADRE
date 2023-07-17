const { Router } = require('express');
const handlerClient = require("../handlers/HandlerClient")

const router = Router();


/* router.use("/user",handlerUser) */

router.use("/client",handlerClient)

// Configurar los routers  
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
