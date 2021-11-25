const { database } = require("../db/database.js")
const { NoExistingCart } = require("../errors/errors.js")

const cartArr = database[0].carts
const getUserCart = (id) => {
  try {
    const cartIndex = cartArr.findIndex((r) => r.login == id)
    if (cartIndex === -1) throw new NoExistingCart()
    const cart = cartArr[cartIndex].cart
    return cart
  } catch (err) {
    throw err
  }
}

const addToUserCart = (login, cart) => {
  if (cartArr.find((cart) => cart.login == login)) {
    throw Error
  }
  console.log({ login: login, cart })
  cartArr.push({ login: login, cart })
}

const editItemInCart = () => {
  throw Error
}

const deleteItemInCart = (id) => {}
module.exports = {
  getUserCart,
  addToUserCart,
  editItemInCart,
  deleteItemInCart,
}
