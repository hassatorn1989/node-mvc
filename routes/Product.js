const routes = require("express").Router();
const ProductController = require("../controllers/ProductController");

routes.get("/", ProductController.index);

module.exports = routes;