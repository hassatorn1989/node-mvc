var Sequelize = require("sequelize");
var db = require("../config/db");
var product = db.define(
  "product",
  {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    product_name: {
      type: Sequelize.STRING
    },
    product_price: {
      type: Sequelize.DOUBLE
    }
  },
  {
    tableName: "product"
  }
);

module.exports = product;
