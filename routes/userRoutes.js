const express = require("express");

const router = express.Router();
const userController = require("../controller/userController");
router.route("/").get(userController.getAlluser);
router.route("/signup").post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
