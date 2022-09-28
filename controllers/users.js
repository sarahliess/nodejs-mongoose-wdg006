const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  const { name, age, hobbies } = req.body;
  try {
    const newUser = await User.create({
      name,
      age,
      hobbies,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, hobbies } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, hobbies },
      //direkt neue Daten anzeigen lassen:
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(`${deletedUser.name} has been deleted.`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
