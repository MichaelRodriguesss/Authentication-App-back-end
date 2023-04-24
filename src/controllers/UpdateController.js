const User = require("../models/User");

module.exports = {
  async update(req, res) {
    const user = await User.findById(req.params.id);

    const file = req.file;

    if (file) user.src = file.filename;

    if (!user) {
      res.status(400).json("Usuário não existe!!");
      return;
    }
    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;

    try {
      const updateUser = await user.save();
      res.status(200).json({
        name: updateUser.name,
        bio: updateUser.bio,
        email: updateUser.email,
        phone: updateUser.phone,
        id: updateUser["_id"],
        createdAt: updateUser.createdAt,
        updatedAt: updateUser.updatedAt,
        src: user.src,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
