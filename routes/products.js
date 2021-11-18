const { Router } = require("express");
const router = new Router();

const productsDB = require("../api/products");

router.get("/products", productsDB.getAllProducts);
router.get("/products/:id", productsDB.getProductById);
router.post("/products", productsDB.postProduct);
router.put("/products/:id", productsDB.editProductById);
router.delete("/products/:id", productsDB.deleteProductById);

module.exports = router;
