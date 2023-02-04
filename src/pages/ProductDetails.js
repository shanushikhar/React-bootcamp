import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product details</h1>
      <p>{params.productID}</p>
    </div>
  );
};

export default ProductDetails;
