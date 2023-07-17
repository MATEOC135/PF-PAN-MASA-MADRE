const { Router } = require('express');
const controller = require("../controllers/getAllData")

const router = Router();

router.get("/",controller.getAllUsers)
router.post("/", controller.postBread)



module.exports = router;
