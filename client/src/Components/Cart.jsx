import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  // Sample cart data (replace with data from your backend or state management)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a sample product description.',
      price: 10,
      stock: 5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another sample product description.',
      price: 20,
      stock: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Yet another sample product description.',
      price: 15,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  // Function to remove a product from the cart
  const handleRemoveProduct = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle "Next" button click
  const handleNext = () => {
    // Navigate to the Checkout page
    navigate('/checkout');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                {/* Product Image */}
                <div className="col-md-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>

                {/* Product Details */}
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-end mt-4">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>

          {/* Next Button */}
          <div className="text-end mt-4">
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;