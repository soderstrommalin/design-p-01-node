const { Router } = require("express");
const router = new Router();

const usersDB = require("../api/users");

router.get("/users", usersDB.getAllUsers);

module.exports = router;
