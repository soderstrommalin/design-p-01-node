const express = require('express')


const app = express()
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const cartsRoutes = require('./routes/carts')

app.use( express.json() )

app.use('/api', productsRoutes)
app.use('/api', usersRoutes)
app.use('/api', cartsRoutes)

const PORT = 5000

app.listen(PORT, () => console.log(`Running on port ${PORT}`))