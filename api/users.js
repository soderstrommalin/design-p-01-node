const usersModel = require("../models/users")

const getAllUsers = async (req, res, next) => {
  try {
    res.json({ message: "all the users" })
  } catch (err) {
    next(err)
  }
}

const getUserById = async (req, res, next) => {
  //   const { id } = req.params
  //   try {
  //     const user = usersModel.getUserById(id)
  //     res.json({
  //       data: user,
  //     })
  //   } catch (err) {
  //     next(err)
  //   }
}

const postUser = async (req, res, next, err) => {
  //   const { name, login } = req.body
  //   if (name === undefined || login === undefined) {
  //     next(err)
  //   }
  //   try {
  //     usersModel.postUser(name, login)
  //     res.json({
  //       msg: "User added",
  //     })
  //   } catch (err) {
  //     next(err)
  //   }
}

const deleteUserById = async (req, res, next) => {
  //   const { id } = req.params
  //   try {
  //     usersModel.deleteUserById(id)
  //     res.json({
  //       msg: "User deleted",
  //     })
  //   } catch (err) {
  //     next(err)
  //   }
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
}
