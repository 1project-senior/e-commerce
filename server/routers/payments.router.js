const express = require("express");
const Router = express.Router();
const {
  getAllPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment
} = require("../controllers/payments.controller");


Router.get("/getall", getAllPayments);


Router.get("/:paymentId", getPaymentById);


Router.post("/add", addPayment);


Router.put("/update/:paymentId", updatePayment);


Router.delete("/delete/:paymentId", deletePayment);

module.exports = Router;