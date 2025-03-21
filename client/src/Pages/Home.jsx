import React, { useState } from "react";
import Home from "../Pages/Home.jsx";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {selectedCategory ? (
        <Home category={selectedCategory} />
      ) : (
        <>
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
              <div className="col-md-6">
                <div className="card text-center">
                  <img
                    src="https://as2.ftcdn.net/jpg/09/14/75/83/1000_F_914758354_hKJIE4insKbrhuBfcz0fminFLGTBeZic.jpg"
                    className="card-img-top"
                    alt="Sitting Room"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Sitting Room</h5>
                    <button
                      onClick={() => handleCategoryClick("Sitting Room")}
                      className="btn btn-outline-dark"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src="https://cupperfield.shop/cdn/shop/files/Chic-Zen-Elegance---Portable-Tea-Set-for-Modern-Tea-Enthusiasts---black.jpg?v=1701718682"
                    className="card-img-top"
                    alt="Accessories"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Accessories</h5>
                    <button
                      onClick={() => handleCategoryClick("Accessories")}
                      className="btn btn-outline-dark"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src="https://www.ikea.com/us/en/images/products/ikea-365-9-piece-cookware-set-stainless-steel__1015724_pe842408_s5.jpg?f=xl"
                    className="card-img-top"
                    alt="Kitchen"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Kitchen</h5>
                    <button
                      onClick={() => handleCategoryClick("Kitchen")}
                      className="btn btn-outline-dark"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center">
                  <img
                    src="https://media.houseandgarden.co.uk/photos/64b024a554c3ba022255957c/master/w_1600,c_limit/Walsinghamrd27-production_digital.jpg"
                    className="card-img-top"
                    alt="Bedroom"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Bedroom</h5>
                    <button
                      onClick={() => handleCategoryClick("Bedroom")}
                      className="btn btn-outline-dark"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
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
        </>
      )}
    </div>
  );
};

export default HomePage;
