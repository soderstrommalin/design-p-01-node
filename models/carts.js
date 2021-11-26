const { database } = require("../db/database.js");
const { NoExistingCart, NoExsistingProduct } = require("../errors/errors.js");

const allCarts = database[0].carts;
const getUserCart = (id) => {
    const cartIndex = allCarts.findIndex((user) => user.login == id);
    if (cartIndex === -1) throw new NoExistingCart();
    const cart = allCarts[cartIndex].cart;
    return cart;
};

const addToUserCart = (login, cart) => {
    if (allCarts.find((cart) => cart.login == login)) throw new NoExistingCart();
    allCarts.push({ login: login, cart });
};

const editItemInCart = (userLogin, productId, amount) => {
    const userCart = getUserCart(userLogin);
    const cartItem = userCart.findIndex((item) => item.productId == productId);
    const cartIndex = allCarts.find((user) => user.login == userLogin);

    cartIndex.cart[cartItem].amount = amount;
    if (cartIndex.cart[cartItem].amount < 1) deleteItemInCart(userLogin, productId);
    if (userCart == undefined) throw new NoExistingCart();
    if (cartItem == undefined) throw new NoExsistingProduct();
};

const deleteItemInCart = (userLogin, itemId) => {
    const userCart = getUserCart(userLogin);
    const cartIndex = allCarts.findIndex((user) => user.login == userLogin);
    const itemIndex = userCart.findIndex((item) => item.productId == itemId);
    if (itemIndex == -1) throw new NoExsistingProduct();
    userCart.splice(itemIndex, 1);
    if (userCart.length == 0) allCarts.splice(cartIndex, 1);
};
module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
