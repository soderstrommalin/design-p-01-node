const express = require("express");

const app = express();
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const cartsRoutes = require("./routes/carts");

app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", usersRoutes);
app.use("/api", cartsRoutes);

module.exports = app;
