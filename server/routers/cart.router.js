const express = require("express");
const Router = express.Router();
const {
  getAllCartProducts,
  addProductToCart,
  removeProduct,
  updateCartProducts
} = require("../controllers/cart.controler");

// GET /api/cart/get/:UserId
Router.get("/get/:UserId", getAllCartProducts);

// POST /api/cart/add
Router.post("/add", addProductToCart);

// DELETE /api/cart/remove/:ProductId
Router.delete("/remove/:ProductId", removeProduct);

// PUT /api/cart/change
Router.put("/change", updateCartProducts);

module.exports = Router;