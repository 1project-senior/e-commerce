import React, { useState } from "react";

const articles = [
  {
    title: "Transforming Your Living Space: Top Trends in Modern Furniture",
    content:
      "Modern furniture trends are continuously evolving. One of the major trends currently is the minimalist approach, where less is more. Incorporating furniture that focuses on simplicity and functionality while maintaining style is key. Think neutral colors, clean lines, and multi-functional pieces. In this article, we dive deep into how these trends are shaping modern living spaces and what you can do to incorporate them in your home.",
    img: "https://www.bhg.com/thmb/hpTdK6ItHFN8OwV_ZGVTBT2NRwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200522-EB_12-Living-Room_1267-b13debcb440a4471981d7ac637e76e7a.jpg",
    alt: "Modern Furniture Trends",
  },
  {
    title: "The Rise of Japandi: Minimalist Design with Warmth",
    content:
      "Japandi design is the blend of Scandinavian minimalism and Japanese functionality. This style emphasizes natural materials, muted colors, and an overall calm aesthetic. Furniture is not just functional but a way to create a serene, peaceful environment in the home. The harmonious balance of simplicity and warmth makes Japandi perfect for small apartments or spacious homes.",
    img: "https://media.architecturaldigest.com/photos/63e162c8af55404690f34514/16:9/w_1920,c_limit/20201012_JennaPeffley_ALLPRACE_0115_trt.jpg",
    alt: "Japandi Style",
  },
  {
    title: "Biophilic Design: Bringing Nature Indoors with Furniture",
    content:
      "Biophilic design connects humans with nature through the use of natural materials, greenery, and natural lighting in furniture and home decor. Integrating plants into your furniture arrangement or using materials like wood and stone can create a healthier and more inviting living space. This design approach can be used in every room, creating a harmonious and peaceful environment.",
    img: "https://www.thegardener.co.za/wp-content/uploads/2023/02/Biophilic-Design-1024x683.jpg",
    alt: "Biophilic Design",
  },
  {
    title: "Smart Furniture: Tech Integration for Modern Living",
    content:
      "Smart furniture is changing how we live in our homes. From sofas with built-in charging ports to smart coffee tables with wireless charging, tech-enabled furniture offers convenience and functionality. These modern designs can help optimize space while seamlessly integrating technology into your lifestyle. Innovations in furniture include integrated lighting, wireless charging stations, and even furniture with built-in speakers.",
    img: "https://media.istockphoto.com/id/1319856031/photo/augmented-reality-for-home-furniture-shopping.jpg?s=2048x2048&w=is&k=20&c=ETrPEXtDY8IysXiamDFqFr8IBDqGex0OQA3oOumuZXE=",
    alt: "Smart Furniture",
  },
  {
    title: "Color Trends in Modern Furniture: Beyond Neutrals",
    content:
      "While neutrals have long dominated furniture design, bold and vibrant colors are making a comeback. From rich greens and deep blues to warm earthy tones, color is a great way to express personality and set the tone of a room. Consider how colors can affect mood and energy in your home. Learn how to mix and match colors in furniture to create an inspiring space that feels personal and welcoming.",
    img: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-c7971c9/www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Textured-walls-and-ceiling-2025-interior-design-trend-in-a-living-room-by-Decorilla-2048x1148.jpeg",
    alt: "Color Trends",
  },
  {
    title: "Choosing the Perfect Sofa: A Guide to Style and Comfort",
    content:
      "Choosing the right sofa can drastically change the vibe of your living room. It’s not just about looks; comfort and durability are key. Learn how to pick the right fabric, style, and size for your needs. Whether you're looking for a sectional, a loveseat, or a sleeper sofa, this guide will walk you through the best options for your space and lifestyle.",
    img: "https://media.houseandgarden.co.uk/photos/66c5ed7586124a0d61d68bef/master/w_1600,c_limit/_FOX5893-production_digital.jpg",
    alt: "Choosing the Perfect Sofa",
  },
];

const Blog = () => {
  // State to track which article has been expanded
  const [expanded, setExpanded] = useState(null);

  const toggleContent = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        Featured Articles on Modern Furniture
      </h1>

      <section>
        <div className="row g-4">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={article.img}
                  className="card-img-top"
                  alt={article.alt}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {expanded === index
                      ? article.content
                      : `${article.content.substring(0, 150)}...`}
                  </p>
                  <button
                    onClick={() => toggleContent(index)}
                    className="btn btn-outline-dark mt-auto"
                  >
                    {expanded === index ? "Show Less" : "Read More"}
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

export default Blog;
