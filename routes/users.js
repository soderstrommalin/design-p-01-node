const { Router } = require("express");
const router = new Router();

const usersDB = require("../api/users");

router.get("/users", usersDB.getAllUsers);
router.get("/users/:id", usersDB.getUserById);
router.post("/users", usersDB.createNewUser);
router.delete("/users", usersDB.deleteUserById);



module.exports = router;
