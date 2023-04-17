const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const userRoute = require("./user-route");

const router = Router();

router.get("/", mainController.home);

router.use("/user", userRoute);

module.exports = router;
