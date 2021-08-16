const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

router.get("/:userId/:monthId", historyController.getMonthHistory);
router.post("", historyController.createHistoryRow);

module.exports = router;
