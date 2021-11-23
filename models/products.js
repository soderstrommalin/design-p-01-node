const { database } = require("../db/database.js");
const { v4: uuidv4 } = require("uuid");
const { NoExsistingProduct } = require("../errors/errors.js");
const productsArr = [];
database[0].products.forEach((r) => productsArr.push(r));

const getAllProducts = () => {
    return productsArr;
};

const getProductById = (id) => {
    const product = productsArr.find((prod) => prod.id == id);
    if (product == undefined) throw new NoExsistingProduct();
    return product;
};

const postProduct = (name, price) => {
    const product = {
        id: uuidv4(),
        name: name,
        price: price,
    };
    productsArr.push(product);
};

const editProductById = (id, name, price) => {
    const productIndex = database[0].products.findIndex((prod) => prod.id == id);
    if (productIndex == -1) throw new NoExsistingProduct();
    if (name !== undefined) database[0].products[productIndex].name = name;
    if (price !== undefined) database[0].products[productIndex].price = price;
};

const deleteProductById = (id) => {
    const productIndex = productsArr.findIndex((prod) => prod.id == id);
    if (productIndex == -1) throw new NoExsistingProduct();
    productsArr.splice(productIndex, 1);
};

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    editProductById,
    deleteProductById,
};
