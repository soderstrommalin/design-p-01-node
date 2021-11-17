
const getAllUsers = async (req, res, next) => {
    try{
        res.json({message: 'all the users'}) //skriv model för users
    } catch(err){
        next(err)
    }
}



module.exports={
    getAllUsers
}