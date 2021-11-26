const { database } = require("../db/database.js")
const { v4: uuidv4 } = require("uuid")
const { NoExsistingProduct } = require("../errors/errors.js")
const allProducts = database[0].products

const getAllProducts = () => {
  return allProducts
}

const getProductById = (id) => {
  const product = allProducts.find((prod) => prod.id == id)
  if (product == undefined) throw new NoExsistingProduct()
  return product
}

const postProduct = (name, price) => {
  const product = {
    id: uuidv4(),
    name: name,
    price: price,
  }
  allProducts.push(product)
}

const editProductById = (id, name, price) => {
  const productIndex = allProducts.findIndex((prod) => prod.id == id)
  if (productIndex == -1) throw new NoExsistingProduct()
  if (name !== undefined) allProducts[productIndex].name = name
  if (price !== undefined) allProducts[productIndex].price = price
}

const deleteProductById = (id) => {
  const productIndex = allProducts.findIndex((prod) => prod.id == id)
  if (productIndex == -1) throw new NoExsistingProduct()
  allProducts.splice(productIndex, 1)
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  editProductById,
  deleteProductById,
}
