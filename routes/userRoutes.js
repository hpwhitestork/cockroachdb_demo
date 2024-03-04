const express = require("express");
const router = express.Router();
const userController = require("./../controller/userController");

router.post("/createUser", userController.createUser);
router.get("/getUser", userController.getAllusers);
router.get("/userById:id", userController.getUserById);
router.put("/updateUser:id", userController.updateUser);
router.delete("/deleteUser:id", userController.deleteUser);

module.exports = router;
