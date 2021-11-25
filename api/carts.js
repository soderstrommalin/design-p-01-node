const { InvalidCredentials } = require("../errors/errors");
const cartsModel = require("../models/carts");
const { getProductById } = require("../models/products");
const { getUserById } = require("../models/users");

const getUserCart = (req, res, next) => {
    const { userLogin } = req.params;
    try {
        getUserById(userLogin);
        const cart = cartsModel.getUserCart(userLogin);
        res.json({ data: cart });
    } catch (err) {
        next(err);
    }
};

const addToUserCart = async (req, res, next) => {
    const { userLogin } = req.params;
    const cart = req.body.cart;
    try {
        cart.forEach((product) => {
            if (product.productId == undefined || product.amount == undefined) {
                throw new InvalidCredentials();
            }
            getProductById(product.productId);
        });
        cartsModel.addToUserCart(userLogin, cart);
        res.json({ msg: `Cart created for ${userLogin}` });
    } catch (err) {
        next(err);
    }
};

const editItemInCart = async (req, res, next) => {};

const deleteItemInCart = async (req, res, next) => {};

module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
