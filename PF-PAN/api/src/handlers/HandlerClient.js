const { Router } = require('express');
const controller = require("../controllers/getAllData")

const router = Router();
////////////// rutas que manipula Cliente/////////////////////
router.get("/",controller.getAllUsers)
router.post("/", controller.postBread)

router.get("/:id",controller.getbreadID)

////////////////// Rutas que se precargan ///////////////////////
router.get("/type", controller.getCategoryType)
router.get("/weigth", controller.getCategoryTypeB)

module.exports = router;