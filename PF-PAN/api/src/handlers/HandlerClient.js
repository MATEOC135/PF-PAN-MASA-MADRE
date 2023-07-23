const { Router } = require('express');
const controller = require("../controllers/getAllData")

const router = Router();
////////////// rutas que manipula Cliente/////////////////////
router.get("/",controller.getAllUsers)
router.post("/", controller.postBread)
router.get("/bread/:id",controller.getbreadID) 

////////////////// Rutas que se precargan ///////////////////////


router.get("/type", controller.getCategoryType)
router.get("/weight", controller.getCategoryTypeB)


router.post("/data",controller.postBreadData)

module.exports = router;