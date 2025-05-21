const { getAllUsers, getUserById, login, register, logout, deleteUser } = require("../data/repository/userRepository");
const express = require("express");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.delete("/:id", deleteUser);

module.exports = router;
