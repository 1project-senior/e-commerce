import React, { useState, useEffect } from "react";
import axios from "axios";

function AllProducts() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/products/getall", {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log("fetchProducts response:", response.data);
      
      if (Array.isArray(response.data)) {
        setProduct(response.data);
      } else if (response.data.products && Array.isArray(response.data.products)) {
        setProduct(response.data.products);
      } else {
        throw new Error("Invalid data format received from server");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.response?.data?.message || "Failed to fetch products. Please check if the server is running.");
      setProduct([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>{error}</h2>;






  return (
    <div>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((el) => (
          <div key={el._id || el.id} className="el-card">
            <h3>{el.name}</h3>
            <p>Price: ${el.price}</p>
            <p>Category: {el.category}</p>
            {el.image && <img src={el.image} alt={el.name} style={{ width: '100px' }} />}
            <p>Description: {el.description}</p>
          </div>
        ))
      )}
     
      
    
    </div>
    
  );
}

export default AllProducts;


