const express = require("express");
const Router = express.Router();
const {
  addProducttoCart,
  getAllCartProducts,
  removeProduct,
  updateCartProducts,
} = require("../controllers/cart.controler");

Router.get("/get", getAllCartProducts);

Router.post("/add", addProducttoCart);
Router.delete("/remove", removeProduct);
Router.put("/change", updateCartProducts);

module.exports = Router;