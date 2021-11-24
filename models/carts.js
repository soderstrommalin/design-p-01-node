const { database } = require("../db/database.js");
const { NoExistingUser } = require("../errors/errors.js");

const cartArr = database[0].carts;

const getUserCart = async (id) => {
   try{
        const cartIndex = cartArr.findIndex((r) => r.login == id);
        if (cartIndex === -1) throw new NoExistingUser()
        const cart = cartArr[cartIndex].cart
        if (cart === undefined) throw new NoExistingUser()
        return cart;
   }catch(err){
       throw err
   } 
};

const addToUserCart = () => {};

const editItemInCart = () => {};

const deleteItemInCart = (id) => {};

module.exports = {
    getUserCart,
    addToUserCart,
    editItemInCart,
    deleteItemInCart,
};
