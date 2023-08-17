const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getUserData);

router.post("/new", userController.createNewUser);

module.exports = router;
