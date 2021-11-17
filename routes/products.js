const { Router } = require("express");
const router = new Router();

const productsDB = require("../api/products");

router.get("/products", productsDB.getAllProducts);

module.exports = router;
