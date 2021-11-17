const { database } = require("../db/database.js");

let productsArr = [];
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

module.exports = {
    getAllProducts,
    getProductById,
};
