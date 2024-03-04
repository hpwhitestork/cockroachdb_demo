const express = require("express");
const router = express.Router();
const userController = require("./../controller/userController");

router.post("/createUser", userController.createUser);
router.post("/bulkinsert", userController.bulkcreate);
router.get("/getUser", userController.getAllusers);
router.get("/userById:id", userController.getUserById);
router.put("/updateUser:id", userController.updateUser);
router.put("/bulkUpdate", userController.bulkUpdateUsers);
router.delete("/deleteUser:id", userController.deleteUser);

module.exports = router;
