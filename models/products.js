const { database } = require("../db/database.js");

const productsArr = [];
database[0].products.forEach((r) => productsArr.push(r));


const getAllProducts = () => {
    return productsArr
}

const getProductById = (id) => {
    const product = productsArr.find((prod, index) => {
        if (prod.id == id) {
            return prod;
        } else {
            return 0;
        }
    });
    return product
}

const postProduct = (product) => {
    productsArr.push(product);
}

const editProductById = (id, name, price) => {
    const productIndex = productsArr.findIndex((prod) => prod.id == id);
    if (name !== undefined) productsArr[productIndex].name = name;
    if (price !== undefined) productsArr[productIndex].price = price;
}

const deleteProductById = (id) => {
    const productIndex = productsArr.findIndex((prod) => prod.id == id);
    productsArr.splice(productIndex, 1);
}


module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    editProductById,
    deleteProductById
}