const express = require("express");
const App = express();
const port = 5000;
const db=require("./modules/database")
const cors = require("cors");
const productesroutes=require("./routers/products.router")

App.use(express.json());
App.use(cors());

App.use("/api/products",productesroutes);
// App.use()

App.listen(port, () => {
  console.log(  `App listening on http://127.0.0.1:${port}`)  ;
});