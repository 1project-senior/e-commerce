import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Forgetpass.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetLink, setResetLink] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/forgotpass", { email });
      setResetLink(response.data.resetLink); // Set the reset link
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "Failed to generate reset link");
      setResetLink("");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email and we'll generate a link to reset your password.</p>
      
      {resetLink && (
        <div className="reset-link">
          <p>Here's your reset link:</p>
          <a href={resetLink} target="_blank" rel="noopener noreferrer">
            {resetLink}
          </a>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
  
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Generate Reset Link
        </button>
      </form>
  
      <p className="back-to-login">
        Remember your password? <a href="/login">Back to login</a>.
      </p>
    </div>
  );
}

export default ForgotPassword;





























// import { useState } from "react"
// import { Link } from "react-router-dom"

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // TODO: Implement password reset logic here
//     console.log("Password reset requested for:", email)
//   }

//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-white">
//       <div className="card border-0 shadow-sm" style={{ maxWidth: "450px", width: "100%" }}>
//         <div className="card-body p-4 p-md-5">
//           <div className="text-center mb-4">
//             <h2 className="fw-bold mb-3">Forgot password</h2>

//             <div className="mx-auto mb-4" style={{ width: "120px", height: "120px" }}>
//               <img
//                 src="/placeholder.svg?height=120&width=120"
//                 alt="Decorative vase"
//                 className="img-fluid"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>

//             <p className="text-muted">Enter your email and we'll send a link to reset your password</p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 className="form-control form-control-lg py-3 px-4 rounded-3"
//                 placeholder="hello@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-lg w-100 py-3 rounded-3 text-white"
//               style={{ backgroundColor: "#7B68EE", borderColor: "#7B68EE" }}
//             >
//               Reset password
//             </button>
//           </form>

//           <div className="text-center mt-4">
//             <p className="mb-0">
//               <span className="text-muted">Remember your password? </span>
//               <Link to="/login" className="text-decoration-none" style={{ color: "#7B68EE" }}>
//                 Back to login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ForgotPassword

