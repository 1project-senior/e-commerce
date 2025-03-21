// import React from 'react'
// import { useNavigate } from "react-router-dom";

// const OneProduct = ({e,i,setProduct}) => {
//   const navigate = useNavigate();
//   const handleNavigate=()=>{
//     navigate("/ProductDetails")
//     setProduct(e)
//   }
//   return (
//     <div key={i}>
//       <img src={e.image} className="card-img-top"  />
//       <div className="card-body">
//       <h5 onClick={handleNavigate} className="card-title">{e.name}</h5>
//         <p className="card-text">${e.price}</p>
//       </div>
//       </div>
//   )
// }

// export default OneProduct
import React from "react";
import { useNavigate } from "react-router-dom";

const OneProduct = ({ e, i, setProduct }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ProductDetails");
    setProduct(e);
  };

  return (
    <div key={i} className="p-3">
      <img
        src={e.image}
        className="card-img-top rounded"
        alt={e.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 onClick={handleNavigate} className="card-title">
          {e.name}
        </h5>
        <p className="card-text">${e.price}</p>
        <button
          className="btn btn-outline-primary"
          // onClick={handleNavigate}
        >
          Add to cart →
        </button>
      </div>
    </div>
  );
};

export default OneProduct;
