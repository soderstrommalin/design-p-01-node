const { database } = require("../db/database.js");

const getAllProducts = async (req, res, next) => {
    try {
        console.log(database[0].products);
        res.json({ message: "hallå alla produkter hehe" }).status(200); //skriv model för products
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
};
