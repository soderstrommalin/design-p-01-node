const { Router } = require("express")
const router = new Router()

const cartsDB = require("../api/carts")

router.get("/carts/:userLogin", cartsDB.getUserCart)
router.post("/carts/:userLogin", cartsDB.addToUserCart)
router.put("/carts/:userLogin/:itemId", cartsDB.editItemInCart)

module.exports = router
