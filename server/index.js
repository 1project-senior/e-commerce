

const express = require("express");
const bodyParser = require('body-parser');
const App = express();
const port = 3000;
const db = require("./modules/database");
const cors = require("cors");
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



App.use(bodyParser.json());

// Define the /api/products/add endpoint

App.post('/api/products/add/add', (req, res) => {
  const { name, price, description, stock, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({ error: 'Name, price, and image are required.' });
  }

  // Save the product to a database (e.g., MongoDB)
  // For now, just log the product data
  console.log('Received Product:', { name, price, description, stock, image });

  res.status(201).json({ message: 'Product added successfully!' });
});



App.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
});


