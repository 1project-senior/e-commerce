import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout/Layout.jsx";
import Navbar from "./Components/Navbar.jsx";
import Categories from "./Components/Categories.jsx";
import Shop from "./Components/Shop.jsx";
import Blog from "./Components/Blog.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Components/Cart.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import LoginPage from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import OrderConfirmation from "./Pages/OrderConfirmation.jsx";
import  Resetpass  from "./Pages/Resetpass.jsx"
import ProductDetails from "./Components/ProductDetails.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          
          <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<Resetpass />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Shop-page" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Add-product" element={<AddProduct />} />
            <Route path="/Shop-page/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
