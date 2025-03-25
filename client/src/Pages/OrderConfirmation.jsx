

import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../Styles/Orderconfermation.css"

const OrderConfirmation = () => {
  const navigate = useNavigate()

  const handleDone = () => {
    navigate("/") 
  }

 

  return (
    <div className="login-overlay">
      <div className="login-slide">
        <div className="login-form-container">
      
          <div className="card border-0 shadow-none" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img

                  src="https://i.etsystatic.com/23246521/r/il/e581a7/4477921254/il_1588xN.4477921254_m1k4.jpg"
                  alt="Decorative tree illustration"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "150px", objectFit: "contain", borderRadius: "10px" }}
                />
                <h3 className="fw-normal">Your Order is Confirmed!</h3>
                <p className="text-muted">
                  Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon.
                </p>
              </div>
              <button
                onClick={handleDone}
                className="btn btn-lg w-100 rounded-pill py-2 mb-3"
                style={{ backgroundColor: "#8a7bff", color: "white" }}
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

