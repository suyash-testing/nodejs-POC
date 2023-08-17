const UserModel = require("../models/users");

const userController = {
  getUserData: async (req, res, next) => {
    const user = await UserModel.find();
    res.status(200).json({
      success: true,
      data: user,
    });
  },
  createNewUser: async (req, res, next) => {
    const { email, role, name } = req.body;
    const user = await UserModel.create({
      email,
      role,
      name,
    });
    res.status(200).json({
      success: true,
      data: user,
    });
  },
};

module.exports = userController;
