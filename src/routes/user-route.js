const { Router } = require("express");
const userController = require("../controllers/user-controller");
const router = Router();

router.get("/login", userController.showLogin);
router.get("/register", userController.showRegister);

module.exports = router;
