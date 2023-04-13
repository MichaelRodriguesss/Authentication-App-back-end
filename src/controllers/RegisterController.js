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
//   async login(req, res) {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       res.status(400).json("Usuário não existe!!");
//       return;
//     }

//     if (await user.matchPassword(password)) {
//       res.status(200).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400).json("E-mail ou senha inválidos");
//     }
//   },
//   async update(req, res) {
//     const user = await User.findById(req.params.id);

//     const file = req.file;

//     if (file) user.src = file.filename;

//     if (!user) {
//       res.status(400).json("Usuário não existe!!");
//       return;
//     }
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.phone = req.body.phone || user.phone;

//     try {
//       const updateUser = await user.save();
//       res.status(200).json({
//         name: updateUser.name,
//         email: updateUser.email,
//         phone: updateUser.phone,
//         id: updateUser["_id"],
//         createdAt: updateUser.createdAt,
//         updatedAt: updateUser.updatedAt,
//         src: user.src,
//       });
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   },
// };
