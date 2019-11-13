const  Product  = require("../models/Product");
class ProductController {
  async index(req, res) {
    //    res.render("welcome");
     Product.findAll()
       .then(product => {
        //    res.render("welcome", );
         res.json(product);
       })
       .catch(err => console.log(err));
  }
}
module.exports = new ProductController();
