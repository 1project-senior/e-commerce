"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import "bootstrap/dist/css/bootstrap.min.css"
import "../Styles/Resetpass.css"

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match.",
        icon: "error",
        confirmButtonText: "OK",
      })
      return
    }

    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:3000/api/user/resetpassword", { token, newPassword })

      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your password has been reset successfully.",
          icon: "success",
          confirmButtonText: "OK",
        })
        navigate("/")
      }
    } catch (error) {
      console.error("Error resetting password:", error)
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Failed to reset password.",
        icon: "error",
        confirmButtonText: "OK",
      })
    } finally {
      setIsLoading(false)
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
                <h3 className="fw-normal">Create New Password</h3>
                <p className="text-muted">Your new password must be different from previous passwords</p>
              </div>

              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-pill py-2 px-3"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-pill py-2 px-3"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 rounded-pill py-2 mb-3"
                  style={{ backgroundColor: "#8a7bff", color: "white" }}
                  disabled={isLoading}
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
                </button>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    Remember your password?{" "}
                    <a href="/login" className="text-decoration-none" style={{ color: "#8a7bff" }}>
                      Back to login
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

export default ResetPassword

