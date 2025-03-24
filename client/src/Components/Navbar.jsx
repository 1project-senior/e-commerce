import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex"></div>

        <div className="d-flex gap-4 position-absolute start-50 translate-middle-x">
          <button
            className="btn btn-link nav-link text-dark"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="btn btn-link nav-link text-dark"
            onClick={() => navigate("/Shop-page")}
          >
            Shop
          </button>
          <button
            className="btn btn-link nav-link text-dark"
            onClick={() => navigate("/Categories")}
          >
            Categories
          </button>
          <button
            className="btn btn-link nav-link text-dark"
            onClick={() => navigate("/Blog")}
          >
            Blog
          </button>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            className="position-relative btn btn-link text-dark"
            onClick={() => navigate("/Cart")}
          >
            <FaShoppingCart size={22} />
          </button>

          <button
            className="btn btn-primary rounded-pill px-4 py-2"
            onClick={() => navigate("/Add-product")}
          >
            Add Product
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
