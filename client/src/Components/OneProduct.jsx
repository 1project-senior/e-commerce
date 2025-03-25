import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const OneProduct = ({ e, i }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Shop-page/${e.id}`);
  };

  const addToCart = async (userId, ProductId, quantity) => {
    try {
      await axios.post(`http://localhost:3000/api/cart/add`, { 
        UserId:userId, 
        ProductId, 
        quantity 
      });
      // You might want to add some feedback here, like a toast notification
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      // Handle error (show error message, etc.)
    }
  };

  const handleAddingToCart = () => {
    // In a real app, you would get the userId from auth context or localStorage
    const UserId = 1; // Replace with actual user ID
    const ProductId = e.id;
    const quantity = 1;
    addToCart(UserId, ProductId, quantity);
  };

  return (
    <div key={i} className="p-3">
      <img
        src={e.image}
        className="card-img-top rounded"
        alt={e.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 onClick={handleNavigate} className="card-title">
          {e.name}
        </h5>
        <p className="card-text">${e.price}</p>
        <button
          className="btn btn-outline-primary"
          onClick={handleAddingToCart}
        >
          Add to cart →
        </button>
      </div>
    </div>
  );
};

export default OneProduct;