const express = require("express");
const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");
const UpdateController = require("../controllers/UpdateController");
const VerifyTokenController = require("../controllers/TokenController");
const upload = require("../config/multer");
const checkToken = require("../middleware/auth");
const FindByIdController = require("../controllers/FindByIdController");

const router = express.Router();

router.post("/", RegisterController.create);
router.post("/login", LoginController.login);
router.put("/:id", upload.single("file"), checkToken, UpdateController.update);
router.get("/verify", checkToken, VerifyTokenController.verify);
router.get("/:id", FindByIdController.detail);

module.exports = router;
