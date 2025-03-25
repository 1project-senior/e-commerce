"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "../Styles/Forgetpass.css" 

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3005/api/user/forgotpassword", { email })

      if (response.data.success) {
        
        alert("Password reset link has been sent to your email.")
        navigate("/")
      }
    } catch (error) {
      console.error("Error sending password reset email:", error)
      setErrorMessage(error.response?.data?.message || "Failed to send password reset email.")
    }
  }

  const handleClose = () => {
    navigate("/")
  }

  return (
    <div className="login-overlay">
      <div className="login-slide">
        <div className="login-form-container">
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <div className="card border-0 shadow-none" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src="https://img.freepik.com/photos-premium/belle-fleur-monstera-dans-pot-blanc-se-tient-support-bois-blanc-fond-blanc_1048944-20018724.jpg?w=740"
                  alt=""
                  className="img-fluid mb-3"
                  style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <h3 className="fw-normal">Reset Password</h3>
                <p className="text-muted">Enter your email and we'll send a link to reset your password</p>
              </div>

              {errorMessage && <div className="alert alert-danger py-2 text-center">{errorMessage}</div>}

              <form onSubmit={handleForgotPassword}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-pill py-2 px-3"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 rounded-pill py-2 mb-3"
                  style={{ backgroundColor: "#8a7bff", color: "white" }}
                >
                  Reset Password
                </button>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    Remember your password?{" "}
                    <a href="/login" className="text-decoration-none" style={{ color: "#8a7bff" }}>
                      Sign in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

