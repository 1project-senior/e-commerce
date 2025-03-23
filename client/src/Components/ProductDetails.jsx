import {  useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {  useParams } from "react-router";


const ProductDetails = () => {
  const {id} = useParams();
  const { data : Products , isSuccess, error  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/products/getall");
      return res.data;
    }
  });
  const product = isSuccess && Products?.find(product => product.id === +id);

  return (
   
    <div className="container my-5">
     {isSuccess && <div className="row g-5">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <p className="text-muted">
            <strong>{product.name}</strong>
          </p>
          <h1>{product.name}</h1>

          <h2 className="text-primary">${product.price}</h2>

          <p>{product.description}</p>

          <div className="d-flex align-items-center mb-3">
            <h6 className="me-3">Quantity</h6>
            <input
              type="number"
              className="form-control w-25"
              defaultValue={1}
              min={1}
            />
          </div>

          <button className="btn btn-primary btn-lg w-100" onClick={()=>{console.log("hi")}}>Buy now</button>

          <ul className="mt-4">
            <li>Free shipping included</li>
            <li>Made from the best materials sourced</li>
          </ul>
        </div>
      </div>}
    </div>
    
  );
};

export default ProductDetails;
