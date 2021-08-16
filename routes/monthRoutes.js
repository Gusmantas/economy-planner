const express = require("express");
const router = express.Router();
const monthController = require("../controllers/monthController");

// router.get("/whoami", userController.whoAmI)
router.get("/:userId", monthController.getUserMonths);
router.post("", monthController.createMonth);

module.exports = router;
