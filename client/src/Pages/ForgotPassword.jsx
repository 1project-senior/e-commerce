import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../Styles/Forgetpass.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/forgotpassword",
        { email } 
      );

      if (response.data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Password reset link has been sent to your email.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error sending password reset email:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to send password reset email.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="forgot-password-container">
      {/* Background - represents your home page */}
      <div className="background-content">
        <div className="home-page-content text-white p-5">
          <h1 className="display-4 mb-4">Discover the Art Contempore</h1>
          <p className="lead">Experience the elegance and functionality of cutting-edge utterance</p>
        </div>
      </div>

      {/* Slide-over forgot password form */}
      <div className="forgot-password-form-slide">
        <div className="forgot-password-form-container p-5">
          <h2 className="text-center mb-4">Reset password</h2>
          <p className="text-center mb-4">Enter your email and we'll send a link to reset your password</p>
          
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3">
              Reset password
            </button>
            <p className="text-center mt-3">
              Remember your password? <a href="/login" className="text-decoration-none">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;