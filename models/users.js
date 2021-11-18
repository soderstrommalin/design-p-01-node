const { database } = require("../db/database.js")
const { v4: uuidv4 } = require("uuid")

// const usersArr = []
// database[0].users.forEach((user) => usersArr.push(user))

const getAllUsers = () => {
  //   return usersArr
}

const getUserById = (id) => {
  //   const userById = usersArr.find((user, index) => {
  //     if (user.id == id) {
  //       return user
  //     } else {
  //       return 0
  //     }
  //   })
  //   return userById
}

const postUser = (name) => {
  //   const user = {
  //     name: name,
  //     login: uuidv4(),
  //   }
  //   usersArr.push(user)
}

const deleteUserById = (id) => {
  //   const userIndex = usersArr.findIndex((user) => user.id == id)
  //   usersArr.splice(userIndex, 1)
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
}
