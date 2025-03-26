import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    acceptTerms: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      setError('Please accept the Terms and Conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/api/user/register', {
        name:formData.name,
        email: formData.email,
        password: formData.password
      });

      if (response.data) {
        localStorage.setItem('token', response.data.token);
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };
  const handleClose = () => {
    navigate("/")
  }

  return (
    <div className="register-overlay">
      <div className="register-slide">
        <div className="register-container">
        <button className="close-btn" onClick={handleClose}>
            ×
          </button>
          <div className="register-left">
            <div className="form-container">
              <h2>Create an account</h2>
              <p className="setup-text">Let's get your account set up</p>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <input
                    type="name"
                    className="form-control custom-input"
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="hello@email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="terms-checkbox">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="acceptTerms">
                    I agree to the <Link to="/terms">Terms and Conditions</Link> of Furniture and acknowledge the <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary create-account-btn">
                  Create account
                </button>

                <div className="login-link">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;