const productsModel = require('../models/products')


const getAllProducts = async (req, res, next) => {
    try {
        const products = productsModel.getAllProducts()
        res.json({
            data: products,
        });
    } catch (err) {
        next(err);
    }
};

const getProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = productsModel.getProductById(id)
        res.json({
            data: product,
        });
    } catch (err) {
        next(err);
    }
};

const postProduct = async (req, res, next) => {
    const product = req.body;
    try {
        productsModel.postProduct(product)
        res.json({
            msg: "Product added",
        });
    } catch (err) {
        next(err);
    }
};

const editProductById = async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        productsModel.editProductById(id, name, price)
        res.json({
            msg: "Product edited",
        });
    } catch (err) {
        next(err);
    }
};

const deleteProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        productsModel.deleteProductById(id)
        res.json({
            msg: "Product deleted",
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    editProductById,
    deleteProductById,
};
