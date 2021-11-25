const { InvalidCredentials } = require("../errors/errors")
const cartsModel = require("../models/carts")
const { getProductById } = require("../models/products")
const { getUserById } = require("../models/users")

const getUserCart = (req, res, next) => {
  const { userLogin } = req.params
  try {
    getUserById(userLogin)
    const cart = cartsModel.getUserCart(userLogin)
    res.json({ data: cart })
  } catch (err) {
    next(err)
  }
}

const addToUserCart = async (req, res, next) => {
  const { userLogin } = req.params
  const cart = req.body.cart
  try {
    cart.forEach((product) => {
      if (product.productId == undefined || product.amount == undefined) {
        throw new InvalidCredentials()
      }
      getProductById(product.productId)
    })
    cartsModel.addToUserCart(userLogin, cart)
    res.json({ msg: `Cart created for ${userLogin}` })
  } catch (err) {
    next(err)
  }
}

const editItemInCart = async (req, res, next) => {
  const { userLogin, itemId } = req.params
  const { amount } = req.body

  try {
    if (typeof amount !== "number" || amount < 1) {
      throw new InvalidCredentials()
    }

    getProductById(itemId)
    cartsModel.editItemInCart(userLogin, itemId, amount)

    res.json({ msg: "item updated" })
  } catch (err) {
    next(err)
  }
}

const deleteItemInCart = async (req, res, next) => {
  const { userLogin, itemId } = req.params
  try {
    getUserById(userLogin)
    getProductById(itemId)
    cartsModel.deleteItemInCart(userLogin, itemId)
    res.json({ msg: "Item deleted" })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUserCart,
  addToUserCart,
  editItemInCart,
  deleteItemInCart,
}
