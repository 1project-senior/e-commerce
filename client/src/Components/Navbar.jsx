import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-brand btn btn-link" onClick={() => navigate('/')}>
          Home
        </button>

        <button className="btn btn-link" onClick={() => navigate('/Shop-page')}>
          Shop
        </button>

        <button className="btn btn-link" onClick={() => navigate('/Categories')}>
          Categories
        </button>

        <button className="btn btn-link" onClick={() => navigate('/Blog')}>
          Blog
        </button>

        <button className="btn btn-link" onClick={() => navigate('/Cart')}>
          Cart
        </button>

        <button className="btn btn-primary" onClick={() => navigate('/Add-product')}>
          Add Product
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


