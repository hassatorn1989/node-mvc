const express = require("express");
const app = express();
const { config, engine } = require("express-edge");
const productRouter = require("./routes/Product");
app.use(engine);
app.set("views", `${__dirname}/views`);

app.use("/product", productRouter);


app.listen(3000, () => {
  console.log("Example app listening on port port!");
});
