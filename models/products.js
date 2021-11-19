const { database } = require("../db/database.js");
const { v4: uuidv4 } = require("uuid");
const { NoExsistingProduct } = require("../errors/errors.js");
const productsArr = [];
database[0].products.forEach((r) => productsArr.push(r));

const getAllProducts = () => {
    return productsArr;
};

const getProductById = (id) => {
    const product = productsArr.find((prod, index) => {
        if (prod.id == id) {
            return prod;
        } else {
            throw new NoExsistingProduct();
        }
    });
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
    const productIndex = productsArr.findIndex((prod) => {
        if (prod.id == id) {
            return prod;
        } else {
            throw new NoExsistingProduct();
        }
    });
    if (name !== undefined) productsArr[productIndex].name = name;
    if (price !== undefined) productsArr[productIndex].price = price;
};

const deleteProductById = (id) => {
    const productIndex = productsArr.findIndex((prod) => {
        if (prod.id == id) {
            return prod;
        } else {
            throw new NoExsistingProduct();
        }
    });
    productsArr.splice(productIndex, 1);
};

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    editProductById,
    deleteProductById,
};
