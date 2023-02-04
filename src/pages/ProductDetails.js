import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product details</h1>
      <p>{params.productID}</p>
      <Link to=".." relative="path">
        back
      </Link>
    </div>
  );
};

export default ProductDetails;
