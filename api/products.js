const { database } = require("../db/database.js");

const productsArr = [];
database[0].products.forEach((r) => productsArr.push(r));

const getAllProducts = async (req, res, next) => {
    try {
        res.json({
            data: productsArr,
        }).status(200); //skriv model för products
    } catch (err) {
        next(err);
    }
};

const getProductById = async (req, res, next) => {
    const { id } = req.params;
    const product = productsArr.find((prod, index) => {
        if (prod.id == id) {
            return prod;
        } else {
            return 0;
        }
    });
    try {
        res.json({
            data: product,
        }).status(200); //skriv model för products
    } catch (err) {
        next(err);
    }
};

const postProduct = async (req, res, next) => {
    const product = req.body;
    productsArr.push(product);
    try {
        res.json({
            msg: "Product added",
        }).status(200); //skriv model för products
    } catch (err) {
        next(err);
    }
};

const editProduct = async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = productsArr.findIndex((prod) => prod.id == id);
    if (name !== undefined) productsArr[product].name = name;
    if (price !== undefined) productsArr[product].price = price;
    try {
        res.json({
            msg: "Product edited",
        }).status(200); //skriv model för products
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    editProduct,
};
