
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const OneProduct = ({ e, i}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Shop-page/${e.id}`);
  };
  // const addToCart = async ()=>{
  //   try {
  //     await axios.post(``)
  //   } catch (error) {
      
  //   }
  // }
  const handleAddingToCart = ()=>{
    // const quantity = 1; 
    // addToCart(UserId,productId, quantity);
    console.log("clicked")
  }

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
