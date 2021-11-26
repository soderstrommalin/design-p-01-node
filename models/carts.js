const { database } = require("../db/database.js");
const { NoExistingCart, NoExsistingProduct } = require("../errors/errors.js");

const cartArr = database[0].carts;
const getUserCart = (id) => {
    const cartIndex = cartArr.findIndex((r) => r.login == id);
    if (cartIndex === -1) throw new NoExistingCart();
    const cart = cartArr[cartIndex].cart;
    return cart;
};

const addToUserCart = (login, cart) => {
    if (cartArr.find((cart) => cart.login == login)) throw new NoExistingCart();
    cartArr.push({ login: login, cart });
};

const editItemInCart = (userLogin, productId, amount) => {
    const userCart = getUserCart(userLogin);
    const cartItem = userCart.findIndex((item) => item.productId == productId);
    const cartIndex = cartArr.find((user) => user.login == userLogin);

    cartIndex.cart[cartItem].amount = amount;
    if (cartIndex.cart[cartItem].amount < 1) deleteItemInCart(userLogin, productId);
    if (userCart == undefined) throw new NoExistingCart();
    if (cartItem == undefined) throw new NoExsistingProduct();
};

const deleteItemInCart = (userLogin, itemId) => {
    const userCart = getUserCart(userLogin);
    const cartIndex = cartArr.findIndex((r) => r.login == userLogin);
    const itemIndex = userCart.findIndex((item) => item.productId == itemId);
    if (itemIndex == -1) throw new NoExsistingProduct();
    userCart.splice(itemIndex, 1);
    if (userCart.length == 0) cartArr.splice(cartIndex, 1);
};
module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
