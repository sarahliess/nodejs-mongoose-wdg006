const express = require("express");
//controllers
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers).post(createUser);

usersRouter.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = usersRouter;
