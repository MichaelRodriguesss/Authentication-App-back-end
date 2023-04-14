const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json("Usuário já existe!!");
      return;
    }
    try {
      const user = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({
        name: user.name,
        email: user.email,
        id: user["_id"],
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
