"use client"
import { useNavigate } from "react-router-dom"

const OrderConfirmation = () => {
  const navigate = useNavigate()

  const handleDone = () => {
    navigate("/") // Navigate to home page when done
  }

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            Oasis
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-secondary">
                Homepage
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/categories" className="text-decoration-none text-secondary">
                Categories
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/categories/sitting-room" className="text-decoration-none text-secondary">
                Sitting Room
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Luxe Armchair - Left Arm Chair
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="/armchair.jpg"
                alt="Modern armchair"
                className="img-fluid rounded"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <button
                className="btn btn-sm btn-light position-absolute top-0 end-0 m-3 rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-arrows-fullscreen"></i>
              </button>
            </div>
          </div>

          {/* Confirmation Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="text-center">
              {/* Tree Image */}
              <div className="mb-4">
                <img
                  src="/tree-illustration.png"
                  alt="Decorative tree illustration"
                  style={{ width: "180px", height: "auto" }}
                />
              </div>

              {/* Confirmation Message */}
              <h2 className="fw-bold mb-3">Your Order is Confirmed!</h2>
              <p className="text-muted mb-4">
                Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon.
                Get ready to transform your space!
              </p>

              {/* Done Button */}
              <button
                onClick={handleDone}
                className="btn btn-lg py-3 px-5 rounded-pill text-white"
                style={{
                  backgroundColor: "#7B68EE",
                  minWidth: "200px",
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation

