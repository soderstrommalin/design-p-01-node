const express = require("express");

const app = express();
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const cartsRoutes = require("./routes/carts");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logger);
app.use("/api", productsRoutes);
app.use("/api", usersRoutes);
app.use("/api", cartsRoutes);
app.use(errorHandler);

module.exports = app;
