const express = require("express");
const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");
const UpdateController = require("../controllers/UpdateController");
const protect = require("../middleware/auth");
const upload = require("../config/multer");

const router = express.Router();

router.post("/", RegisterController.create);
router.post("/login", LoginController.login);
router.put("/:id", upload.single("file"), protect, UpdateController.update);

module.exports = router;
