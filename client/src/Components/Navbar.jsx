import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from 'axios'




function Navbar() {
  const navigate = useNavigate();
  const token=localStorage.getItem("token")
  const [user,setuser]=useState({})
//   const [currentuser,setcurrentuser]=useState({})
  
// async function fetchcurrentuser(){
//   if (token) {
//     try {
//       // setuser(jwtDecode(token));
//       const user=jwtDecode(token)
//       console.log("userrrrr",user); // This will print the decoded user information
//       setuser(user)
//     } catch (error) {
//       console.error("Invalid token", error);
//     }
//   } else {
//     console.log("No token found");
//   }
//   const res= await axios.get(`http://localhost:3000/api/user/${user.id}`)
// setcurrentuser(res.data) 

// }

// useEffect(()=>{fetchcurrentuser()},[])

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


