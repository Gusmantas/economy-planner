const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/whoami", userController.whoAmI)
router.post("/login", userController.login)
router.get("/logout", userController.logout)
router.get("/users", userController.getUsers);
router.post("/register", userController.registerUser)

module.exports = router;