const User = require("../models/User");

module.exports = {
  async detail(req, res) {
    const id = req.params;

    try {
      const users = await User.findOne(id, "-password");

      if (!users) {
        res.status(422).json({ message: "User was not found!" });
        return;
      }

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
