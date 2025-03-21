import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Navbar from "./Components/Navbar.jsx";
import Categories from "./Components/Categories.jsx";
import Shop from "./Components/Shop.jsx";
import Blog from "./Components/Blog.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Components/Cart.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route
              path="/Shop-page"
              element={<Shop setProduct={setProduct} />}
            />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Add-product" element={<AddProduct />} />
            <Route
              path="/ProductDetails"
              element={<ProductDetails product={product} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
