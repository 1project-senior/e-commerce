// Payment.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { email, firstName, lastName, address, city, country } = location.state || {};

  // State for payment information
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate payment information
    if (!cardNumber || !expirationDate || !cvv || !cardholderName) {
      alert('Please fill all payment details.');
      setLoading(false);
      return;
    }

    // Simulate order processing
    try {
      const orderDetails = {
        email,
        firstName,
        lastName,
        address,
        city,
        country,
        payment: {
          cardNumber,
          expirationDate,
          cvv,
          cardholderName,
        },
      };

      console.log('Order Details:', orderDetails);

      // Simulate a delay for order processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Payment Details</h1>
      <div className="card p-4 shadow mb-4">
        <h3>Payment Information</h3>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
              required
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="Exp.Date"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV ..."
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="Name on card ..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Placing Order...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;