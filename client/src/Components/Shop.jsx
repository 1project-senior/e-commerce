import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import OneProduct from "./OneProduct";

const categories = [
  { id: 1, name: "Sitting Room" },
  { id: 2, name: "Kitchen" },
  { id: 3, name: "Bedroom" },
  { id: 4, name: "Accessories" },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  const {
    data: Products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/products/getall");
      return res.data;
    },
  });

  // Populate filteredProducts with all products after data is fetched
  useEffect(() => {
    if (Products) {
      setFilteredProducts(Products);
    }
  }, [Products]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  // Handle category button click
  const handleCategoryClick = (categoryId) => {
    if (categoryId === null) {
      // Show all products
      setFilteredProducts(Products);
    } else {
      // Filter products by categoryId
      setFilteredProducts(
        Products.filter((product) => product.CategoryId === categoryId)
      );
    }
  };

  // Filter products based on the search term
  const displayedProducts = filteredProducts.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <p className="text-center mb-3">
        Transform your household room with our elegant and functional
        accommodations options, perfect for every modern home.
      </p>
      <div className="text-center mb-3">
        <small>
          <a href="/">Homepage</a> &gt; <a href="/Categories">Categories</a>
        </small>
      </div>

      {/* Input field */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button
          className="btn btn-primary ms-2"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>

      {/* Category buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {["All", ...categories].map((category) => (
          <button
            key={category.name || "All"}
            className="btn btn-outline-secondary"
            onClick={
              () => handleCategoryClick(category.id || null) // Pass categoryId or null for "All"
            }
          >
            {category.name || "All"}
          </button>
        ))}
      </div>

      {/* Product cards */}
      <h2 className="mb-4">Top Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {displayedProducts.map((product, index) => (
          <div key={product.id} className="col">
            <div className="card h-100 text-center">
              <OneProduct e={product} i={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
