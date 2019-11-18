const routes = require("express").Router();
const ProductController = require("../controllers/ProductController");
routes.get("/product", ProductController.index);
routes.post("/product/store", ProductController.store);
routes.post("/product/edit", ProductController.edit);
routes.post("/product/update", ProductController.update);
routes.post("/product/destroy", ProductController.destroy);

module.exports = routes;