// import React, { useState } from 'react';
// import Login from './Login'; // Adjust the import path as necessary

// const Home = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   const toggleLogin = () => {
//     setShowLogin(!showLogin);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand">Home</span>
//           <button className="btn btn-outline-primary" onClick={toggleLogin}>
//             Login
//           </button>
//         </div>
//       </nav>
//       <h1>This is home</h1>
//       {showLogin && <Login onClose={toggleLogin} />}
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Oasis</h1>
      <p>Discover the elegance and functionality of cutting-edge domains.</p>
      <div className="cta-buttons">
        <a href="/register" className="cta-button">Sign Up</a>
        <a href="/login" className="cta-button">Login</a>
      </div>
      <div className="feature-section">
        <h2>Features</h2>
        <ul>
          <li>Modern Design</li>
          <li>Secure Authentication</li>
          <li>User-Friendly Interface</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;