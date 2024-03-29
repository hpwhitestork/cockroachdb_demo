const { BelongsToMany } = require("sequelize");
const { Bank } = require("../model/bankModel");

exports.createUser = async (req, res) => {
  try {
    const { name, balance } = req.body;

    const newUser = await Bank.create({
      name,
      balance,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.bulkcreate = async (req, res) => {
  try {
    const userInsert = req.body.users;
    const insertedUser = await Bank.bulkCreate(userInsert);
    res.status(201).json({
      status: "success",
      data: {
        users: insertedUser,
      },
    });
  } catch (err) {
    console.error("Error performing bulk insert:", err);
    res.status(500).json({
      status: "error",
      message: "Unable to perform bulk insert",
    });
  }
};

exports.getAllusers = async (req, res) => {
  try {
    const users = await Bank.findAll();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Bank.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, balance } = req.body;
    const user = await Bank.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    await user.update({
      name,
      balance,
    });
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.bulkUpdateUsers = async (req, res) => {
  try {
    const bulkupdate = req.body.users;

    const updatedUsers = await Promise.all(
      bulkupdate.map(async (user) => {
        const [updatedUser] = await Bank.upsert(user, { returning: true });
        return updatedUser;
      })
    );
    res.status(200).json({
      status: "success",
      data: {
        users: updatedUsers,
      },
    });
  } catch (err) {
    console.error("Error performing bulk update:", error);
    res.status(500).json({
      status: "error",
      message: "Unable to perform bulk update",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Bank.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    await user.destroy();
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
