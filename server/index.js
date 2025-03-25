

const express = require("express");
const App = express();
const port = 3005;
const db = require("./modules/database");
const cors = require("cors");
require("dotenv").config();

const productesroutes = require("./routers/products.router.js");
const userrouter=require("./routers/user.router")
const categoryrouter= require("./routers/category.router")
const cartRouter = require("./routers/cart.router.js");
const paymentRouter = require("./routers/payments.router.js");



App.use(express.json());
App.use(cors());

App.use("/api/products", productesroutes);
App.use("/api/user",userrouter)
App.use("/api/category" ,categoryrouter)
App.use("/api/cart", cartRouter);
App.use("/api/payment", paymentRouter);




App.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
});


