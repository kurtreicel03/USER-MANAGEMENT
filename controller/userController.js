const User = require("../model/userModel");

exports.createUser = async (req, res) => {
  console.log(req.body);
  const user = await User.create(req.body);

  res.status(201).json({
    message: "succes",
    data: user,
  });
};

exports.getAlluser = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    message: "success",
    data: user,
  });
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).exec();

  res.status(200).json({
    message: "success",
    data: user,
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

  res.status(201).json({
    message: "success",
    data: updatedUser,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  res.status(203).json({
    message: "succes",
  });
};
