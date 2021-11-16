
const getAllProducts = async (req, res, next) => {
    try{
        res.json({message: 'hallå alla produkter hehe'}) //skriv model för products
    } catch(err){
        next(err)
    }
}



module.exports={
    getAllProducts
}