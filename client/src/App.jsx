import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import Layout from "./Layout/Layout.jsx";
import Navbar from "./Components/Navbar.jsx";
import Categories from "./Components/Categories.jsx";
import Shop from "./Components/Shop.jsx";
import Blog from "./Components/Blog.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Components/Cart.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";



const queryClient = new QueryClient()

function App() {
 
  return (
    <QueryClientProvider  client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route
              path="/Shop-page"
              element={<Shop  />}
            />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Add-product" element={<AddProduct />} />
            <Route
              path="/Shop-page/:id"
              element={<ProductDetails  />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </QueryClientProvider>
  );
}

export default App;
