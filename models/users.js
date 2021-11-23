const { database } = require("../db/database.js")
const { v4: uuidv4 } = require("uuid")
const { NoExistingUser } = require("../errors/errors.js")

const allUsers = []
database[0].users.forEach((user) => allUsers.push(user))

const getAllUsers = () => {
  return allUsers
}

const getUserById = (id) => {
  const userById = allUsers.find((user) => user.login === id)
  if (userById == undefined) throw new NoExistingUser()
  return userById
}

const postUser = (name) => {
  const user = {
    name: name,
    login: uuidv4(),
  }
  allUsers.push(user)
}

const deleteUserById = (id) => {
  const userIndex = allUsers.findIndex((user) => {
    if (user.login == id) {
      return user
    } else {
      throw new NoExistingUser()
    }
  })
  allUsers.splice(userIndex, 1)
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
}
