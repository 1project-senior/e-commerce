import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <h5 className="mb-3">Our website</h5>
        <div className="row">
          <div className="col-md-4">
            <p>Contact Us: +216 12 345 678</p>
          </div>
          <div className="col-md-4">
            <p>Address: Technopark Elghazela, B24, Ariana 2088</p>
          </div>
          <div className="col-md-4">
            <p>Email: hello@logiplum.com</p>
            <p>Opening Hours: 9am—6pm</p>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 my-3">
          <Link to="/" className="btn btn-outline-light">
            Home
          </Link>
          <Link to="/Shop-page" className="btn btn-outline-light">
            Shop
          </Link>
          <Link to="/Categories" className="btn btn-outline-light">
            Categories
          </Link>
        </div>

        <p className="mt-3">&copy; 2025 — Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
