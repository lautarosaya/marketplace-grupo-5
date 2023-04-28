const { Router } = require("express");
const router = Router();
const productRouter = require("../controllers/product-controller");

router.get("/showProduct/:id", productRouter.show);

module.exports = router;
