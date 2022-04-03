import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams(); // extracting route params

  return (
    <div>
      Product-details
      <p>{params.productID}</p>
    </div>
  );
}
export default ProductDetails;
