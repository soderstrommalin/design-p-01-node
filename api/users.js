const usersModel = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { InvalidBody, NoExistingUser } = require("../errors/errors.js");

const getAllUsers = async (req, res, next) => {
    try {
        const users = usersModel.getAllUsers();
        res.json({
            data: users,
        });
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = usersModel.getUserById(id);
        res.json({
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

const createNewUser = async (req, res, next) => {
    const { name } = req.body;

    const login = uuidv4();
    try {
        if (name == undefined) throw new InvalidBody(["name"]);
        usersModel.postUser(name, login);
        res.json({
            msg: "User added",
        });
    } catch (err) {
        next(err);
    }
};

const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        usersModel.deleteUserById(id);
        res.json({
            msg: "User deleted",
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    deleteUserById,
};
