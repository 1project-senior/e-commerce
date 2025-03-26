import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/cart/get/1');
        setCartItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price) * (item.quantity || 1))
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/api/cart/remove/${id}`, {
        data: { ProductId: id }
      });
      setCartItems(items => items.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error removing product:', err);
      setError('Failed to remove item. Please try again.');
    }
  };

  const handleNext = () => {
    navigate('/checkout', {
      state: {
        cartItems,
        totalPrice,
      },
    });
  };

  if (loading) {
    return (
      <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div>Loading cart data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container" style={{ maxWidth: '768px' }}>
        <div className="card shadow-sm">
          <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
            <h5 className="mb-0">Cart ({cartItems.length} items)</h5>
            <button className="btn btn-link text-secondary p-0 border-0">
              <X size={24} />
            </button>
          </div>

          <div className="card-body p-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-secondary py-4">
                Your cart is empty
              </div>
            ) : (
              <div className="d-flex flex-column gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex gap-4">
                    <div className="bg-light rounded" style={{ width: '96px', height: '96px', flexShrink: 0 }}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-100 h-100 object-fit-cover rounded"
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/96')}
                      />
                    </div>

                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="mb-1">{item.name}</h6>
                        <button 
                          onClick={() => handleRemoveProduct(item.id)}
                          className="btn btn-link text-secondary p-0 border-0"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <p className="text-secondary small mb-2">{item.description}</p>
                    </div>

                    <div className="d-flex flex-column align-items-end gap-2">
                      <span className="fw-medium">
                        ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                      </span>
                      <div className="btn-group">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="btn btn-outline-secondary btn-sm disabled" style={{ width: '40px' }}>
                          {item.quantity || 1}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card-footer bg-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="h6 mb-0">Total</span>
              <span className="h6 mb-0">${totalPrice}</span>
            </div>
            <button 
              className="btn btn-primary w-100"
              onClick={handleNext}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;