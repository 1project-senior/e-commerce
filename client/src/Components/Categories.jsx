import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
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
];

const Categories = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleCategoryClick = () => {
    navigate("/Shop-page"); // Navigate to the Shop page when button is clicked
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Explore Our Exclusive Furniture Categories</h1>

      <section>
        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={category.img} // Image source from category data
                  className="card-img-top"
                  alt={category.alt} // Alt text from category data
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{category.title}</h5>
                  <button
                    onClick={handleCategoryClick}
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
    </div>
  );
};

export default Categories;

