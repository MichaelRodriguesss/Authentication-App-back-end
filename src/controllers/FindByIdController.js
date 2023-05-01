const User = require("../models/User");

module.exports = {
  async detail(req, res) {
    const id = req.params.id;

    try {
      const user = await User.findById(id, "-password");

      if (!user) {
        res.status(422).json({ message: "User was not found!" });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
