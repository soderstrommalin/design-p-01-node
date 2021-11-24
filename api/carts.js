const cartsModel = require("../models/carts");

const getUserCart = (req, res, next) => {
    const { userLogin } = req.params;
    try {
        const cart = cartsModel.getUserCart(userLogin);
        res.json({ data: cart });
    } catch (err) {
        next(err);
    }
};

const addToUserCart = async (req, res, next) => {};

const editItemInCart = async (req, res, next) => {};

const deleteItemInCart = async (req, res, next) => {};

module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
