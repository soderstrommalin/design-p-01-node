const {Router} = require('express')
const router = new Router()

const usersDB = require('../db/users')

router.get('/users', usersDB.getAllUsers)


module.exports = router