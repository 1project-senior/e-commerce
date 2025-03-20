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
import Checkout from "./Components/Checkout.jsx";
import Payment from "./Components/Payment.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Shop-page" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Add-product" element={<AddProduct />} />
            <Route path="/" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
