"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "../Styles/Login.css";

function LoginPage({ onClose }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", loginData);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-slide">
        <div className="login-form-container">
          <button className="close-btn" onClick={onClose}>×</button>
          <div className="card border-0 shadow-none" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src="https://img.freepik.com/photos-premium/belle-fleur-monstera-dans-pot-blanc-se-tient-support-bois-blanc-fond-blanc_1048944-20018724.jpg?w=740"
                  alt=""
                  className="img-fluid mb-3"
                  style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <h3 className="fw-normal">Welcome back</h3>
              </div>

              {errorMessage && <div className="alert alert-danger py-2 text-center">{errorMessage}</div>}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-pill py-2 px-3"
                    placeholder="hello@example.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-pill py-2 px-3"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
                <div className="text-end mb-4">
                  <a href="/forgot-password" className="text-decoration-none" style={{ color: "#8a7bff" }}>
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg w-100 rounded-pill py-2"
                  style={{ backgroundColor: "#8a7bff", color: "white" }}
                >
                  Login
                </button>
              </form>

              <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1 border-bottom"></div>
                <div className="px-3 text-muted">OR</div>
                <div className="flex-grow-1 border-bottom"></div>
              </div>

              <button className="btn btn-outline-secondary w-100 rounded-pill mb-3 py-2 d-flex align-items-center justify-content-center">
                <FcGoogle className="me-2" size={20} />
                Continue with Google
              </button>

              <button className="btn btn-outline-secondary w-100 rounded-pill py-2 d-flex align-items-center justify-content-center">
                <FaApple className="me-2" size={20} />
                Continue with Apple
              </button>

              <div className="text-center mt-4">
                <p className="mb-0">
                  First time here?{" "}
                  <a href="/register" className="text-decoration-none" style={{ color: "#8a7bff" }}>
                    Create an account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;