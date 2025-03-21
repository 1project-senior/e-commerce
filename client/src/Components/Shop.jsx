
import React, { useState, useEffect } from "react";
import axios from "axios";
import OneProduct from "./OneProduct";

const Shop = ({ setProduct }) => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products/getall");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      
      <p className="text-center mb-3">
        Transform your household room with our elegant and functional accommodations options, perfect for every modern home.
      </p>
      <div className="text-center mb-3">
        <small>
          <a href="/">Homepage</a> &gt; <a href="/Categories">Categories</a> &gt; Sitting Room
        </small>
      </div>

      {/* Input field */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or category..."
        />
        <button className="btn btn-primary ms-2">Search</button>
      </div>

      {/* Category buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {["All", "Bedroom", "Kitchen", "Sittingroom", "Accesssories"].map(
          (category) => (
            <button key={category} className="btn btn-outline-secondary">
              {category}
            </button>
          )
        )}
      </div>

      {/* Product cards */}
      <h2 className="mb-4">Top Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((product, index) => (
          <div key={product.id} className="col">
            <div className="card h-100 text-center">
              <OneProduct e={product} i={index} setProduct={setProduct} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

