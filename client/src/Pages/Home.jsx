import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login.jsx"

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [showLogin, setShowLogin] = useState(false);
    const toggleLogin = () => {
    setShowLogin(!showLogin);
  

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Home</span>
          <button className="btn btn-outline-primary" onClick={toggleLogin}>
            Login
          </button>
        </div>
      </nav>
      <h1>This is home</h1>
      {showLogin && <Login onClose={toggleLogin} />}
    </div>
  );
};

  const handleCategoryClick = (category) => {
    navigate("/Shop-page"); // Navigate to the /Shop-page path
  };

  return (
    <div>
      <section className="container text-center my-5">
        <h6 className="text-uppercase">Furniture Store</h6>
        <h1>Discover the Artistry of Modern Contemporary Furniture</h1>
        <p>
          Experience the elegance and functionality of cutting-edge design.
        </p>
        <img
          src="https://as2.ftcdn.net/v2/jpg/09/07/28/93/1000_F_907289365_sAfvO9lf2HaUi1vmgDi9YNbPe4o4slbp.jpg"
          alt="Modern Sofa"
          className="img-fluid rounded"
        />
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row g-4">
          {[
            {
              title: "Sitting Room",
              img: "https://as2.ftcdn.net/jpg/09/14/75/83/1000_F_914758354_hKJIE4insKbrhuBfcz0fminFLGTBeZic.jpg",
              alt: "Sitting Room",
            },
            {
              title: "Accessories",
              img: "https://cupperfield.shop/cdn/shop/files/Chic-Zen-Elegance---Portable-Tea-Set-for-Modern-Tea-Enthusiasts---black.jpg?v=1701718682",
              alt: "Accessories",
            },
            {
              title: "Kitchen",
              img: "https://www.ikea.com/us/en/images/products/ikea-365-9-piece-cookware-set-stainless-steel__1015724_pe842408_s5.jpg?f=xl",
              alt: "Kitchen",
            },
            {
              title: "Bedroom",
              img: "https://media.houseandgarden.co.uk/photos/64b024a554c3ba022255957c/master/w_1600,c_limit/Walsinghamrd27-production_digital.jpg",
              alt: "Bedroom",
            },
            {
              title: "Outdoor",
              img: "https://www.worldfurnitureonline.com/wp-content/uploads/2010/06/World-Furniture-Online_110-scaled.jpg",
              alt: "Outdoor",
            },
            {
              title: "Office",
              img: "https://res.cloudinary.com/hni-corporation/image/upload/d_allsteel-fallback-image_jy84n9.jpg/f_auto,q_auto/w_385,h_217,c_fill,f_auto,q_auto,c_scale,dpr_auto/v1633628376/Allsteel/Images/Environment/Environment_Chicago_NeoCon_2021_%287%29.jpg",
              alt: "Office",
            },
          ].map((category, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={category.img}
                  className="card-img-top"
                  alt={category.alt}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{category.title}</h5>
                  <button
                    onClick={() => handleCategoryClick(category.title)}
                    className="btn btn-outline-dark mt-auto"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">
          We have got the answers to your questions
        </h2>
        <div className="accordion" id="faqAccordion">
          {[
            {
              question: "What types of furniture do you offer?",
              answer:
                "We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.",
            },
            {
              question: "Do you offer international shipping?",
              answer:
                "Yes, we provide international shipping options. Shipping costs and delivery times depend on the destination.",
            },
            {
              question: "What is your return policy?",
              answer:
                "We offer a 30-day return policy for unused items in their original packaging. Certain conditions apply.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and financing options through Affirm. All transactions are secure and encrypted.",
            },
          ].map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

