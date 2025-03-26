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
        },
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

  if (loading) return <h2 className="text-2xl font-medium text-slate-900 dark:text-slate-50">Loading products...</h2>;
  if (error) return <h2 className="text-2xl font-medium text-red-500">{error}</h2>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-4">All Products</h2>
      {products.length === 0 ? (
        <p className="text-lg text-slate-600 dark:text-slate-400">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((el) => (
            <div
              key={el._id || el.id}
              className="card border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="card-body">
                <h3 className="card-title text-xl font-medium text-slate-900 dark:text-slate-50">{el.name}</h3>
                <p className="text-slate-700 dark:text-slate-400">Price: ${el.price}</p>
                <p className="text-slate-700 dark:text-slate-400">Category: {el.category}</p>
                {el.image && (
                  <img
                    src={el.image}
                    alt={el.name}
                    className="w-full h-auto rounded-lg mt-2"
                  />
                )}
                <p className="text-slate-700 dark:text-slate-400 mt-2">Description: {el.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;


