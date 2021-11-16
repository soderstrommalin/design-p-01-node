const {Router} = require('express')
const router = new Router()

const cartsDB = require('../db/carts')

router.get('/carts/:userLogin', cartsDB.getAllCarts)


module.exports = router