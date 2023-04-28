const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  home: (req, res) => {
    db.Product.findAll({
      order: [["id", "ASC"]],
      limit: 5,
    }).then((product) => {
      res.render("index", { product });
    });
  },
};
