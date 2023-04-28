const db = require("../../database/models");

module.exports = {
  show: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("product", { product });
    });
  },
};
