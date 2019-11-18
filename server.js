const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const csrf = require('csurf')
const cookieParser = require('cookie-parser');
const app = express();
const productRouter = require("./routes/web");
// csrf
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })
app.use(cookieParser())

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use("", parseForm, csrfProtection, productRouter);
app.use(express.static('public'));
app.use(csrf());
app.use(function (req, res, next) {
  res.locals.token = req.csrfToken();
  next();
});
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Example app listening on port port!");
});
