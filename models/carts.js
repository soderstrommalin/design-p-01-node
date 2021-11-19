const { database } = require("../db/database.js");

const cartArr = database[0].carts;
const getUserCart = (id) => {
    const cartIndex = cartArr.findIndex((r) => r.login == id);
    return cartArr[cartIndex].cart;
};

const addToUserCart = () => {};

const editItemInCart = () => {};

const deleteItemInCart = (id) => {};

module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
