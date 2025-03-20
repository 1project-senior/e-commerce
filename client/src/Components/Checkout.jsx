import React, { useState } from 'react';

const Checkout = () => {
  // State for shipping information
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // State for payment information
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  // Step management
  const [step, setStep] = useState(1); // 1 = Shipping, 2 = Payment

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle shipping information submission
  const handleShippingSubmit = (e) => {
    e.preventDefault();

    // Validate shipping information
    if (!email || !firstName || !lastName || !address || !city || !country) {
      alert('Please fill all shipping information fields.');
      return;
    }

    // Proceed to the payment step
    setStep(2);
  };

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
      <h1 className="text-center mb-4">Checkout</h1>

      {/* Step 1: Shipping Information */}
      {step === 1 && (
        <div className="card p-4 shadow mb-4">
          <h3>Shipping Information</h3>
          <form onSubmit={handleShippingSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St"
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="New York"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="USA"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Proceed to Payment
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Payment Information */}
      {step === 2 && (
        <div className="card p-4 shadow mb-4">
          <h3>Payment Details</h3>
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
              {loading ? 'Placing Order...' : 'Pay Now '}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;