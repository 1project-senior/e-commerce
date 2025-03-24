import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './Cart.css'; // Assuming you'll create this file for styling

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cart/get/1'); // Adjust UserId as needed
        setCartItems(response.data);
        console.log(response.data, "🍾🍾🍾");
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  // Handle navigation to checkout
  const handleNext = () => {
    navigate('/checkout', {
      state: {
        cartItems,
        totalPrice,
      },
    });
  };

  // Handle removing a product from the cart
  const handleRemoveProduct = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  if (loading) {
    return <div className="loading">Loading cart data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
                    /> */}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-footer">
            <p className="total-price">Total: ${totalPrice}</p>
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;