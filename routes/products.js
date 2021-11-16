const {Router} = require('express')
const router = new Router()

const productsDB = require('../db/products')


router.get('/products', productsDB.getAllProducts)


module.exports = router