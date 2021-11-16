
const getAllCarts = async (req, res, next) => {
    const user = req.params.userLogin
    try{
        res.json({message: `cart for user ${user}`}) //skriv model för carts
    } catch(err){
        next(err)
    }
}



module.exports={
    getAllCarts
}