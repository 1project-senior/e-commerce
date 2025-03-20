// Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  // State for shipping information
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Handle shipping information submission
  const handleShippingSubmit = (e) => {
    e.preventDefault();

    // Validate shipping information
    if (!email || !firstName || !lastName || !address || !city || !country) {
      alert('Please fill all shipping information fields.');
      return;
    }

    // Navigate to the payment page with shipping data
    navigate('/payment', {
      state: {
        email,
        firstName,
        lastName,
        address,
        city,
        country,
      },
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Checkout</h1>
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
    </div>
  );
};

export default Checkout;