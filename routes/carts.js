const { Router } = require("express");
const router = new Router();

const cartsDB = require("../api/carts");

router.get("/carts/:userLogin", cartsDB.getUserCart);

module.exports = router;
