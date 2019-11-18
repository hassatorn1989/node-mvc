const Product = require("../models/Product");
class ProductController {
  async index(req, res) {
    Product.findAll()
      .then(product => {
        res.render("welcome", {
          products: product,
          csrfToken: req.csrfToken()
        });
      })
      .catch(err => console.log(err));
  }
  async store(req, res) {
    Product.create({
      product_name: req.body.product_name,
      product_price: req.body.product_price
    }).then(product => {
      res.redirect('/product');
    })
  }
  async edit(req, res) {
    Product.findAll({
      where: {
        product_id: req.body.id
      }
    }).then(product => {
      res.json(product);
    })
  }
  async update(req, res) {
    Product.update({ 
      product_name: req.body.product_name, 
      product_price: req.body.product_price
    },
      { 
        where: { 
          product_id: req.body.id
         } }
    ).then((product) => {
      res.redirect('/product');
    });
  }
  async destroy(req, res) {
    Product.destroy({
      where: { product_id: req.body.id }
    });
    res.json({
      status: 'success'
    })
  }

  
}
module.exports = new ProductController();
