module.exports = {
  async verify(req, res) {
    return res.json({ message: "Verified!" });
  },
};
