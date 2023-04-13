const generateToken = require("../utils/generateToken");
const User = require("../models/User");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json("Usuário não existe!!");
      return;
    }

    if (await user.matchPassword(password)) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json("E-mail ou senha inválidos");
    }
  },
};
