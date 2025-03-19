const { payment } = require("../modules/database.js");

module.exports = {
  // Get all payments
  getAllPayments: async (req, res) => {
    try {
      const payments = await payment.findAll();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payments", error });
    }
  },

  // Get a single payment by ID
  getPaymentById: async (req, res) => {
    try {
      const { paymentId } = req.params;
      const paymentData = await payment.findByPk(paymentId);

      if (!paymentData) {
        return res.status(404).json({ message: "Payment not found" });
      }

      res.status(200).json(paymentData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payment", error });
    }
  },

  // Add a new payment
  addPayment: async (req, res) => {
    try {
      const { amount, status } = req.body;

      if (!amount || !status) {
        return res.status(400).json({ message: "Amount and status are required" });
      }

      const newPayment = await payment.create({ amount, status });

      res.status(201).json({ message: "Payment added successfully", newPayment });
    } catch (error) {
      res.status(500).json({ message: "Error adding payment", error });
    }
  },

  // Update payment status
  updatePayment: async (req, res) => {
    try {
      const { paymentId } = req.params;
      const { status } = req.body;

      const existingPayment = await payment.findByPk(paymentId);

      if (!existingPayment) {
        return res.status(404).json({ message: "Payment not found" });
      }

      await existingPayment.update({ status });

      res.status(200).json({ message: "Payment updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating payment", error });
    }
  },

  // Delete a payment
  deletePayment: async (req, res) => {
    try {
      const { paymentId } = req.params;

      const deletedPayment = await payment.destroy({ where: { id: paymentId } });

      if (!deletedPayment) {
        return res.status(404).json({ message: "Payment not found" });
      }

      res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting payment", error });
    }
  }
};