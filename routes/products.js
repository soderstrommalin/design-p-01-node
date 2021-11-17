const { Router } = require("express");
const router = new Router();

const productsDB = require("../api/products");

router.get("/products", productsDB.getAllProducts);
router.get("/products/:id", productsDB.getProductById);

module.exports = router;
