const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/api/speedtest", controller.getInternetSpeed);

module.exports = router;