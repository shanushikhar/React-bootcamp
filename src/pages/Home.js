import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      Home page
      <div>
        <Link to={"products"}>Go to Products page</Link>
      </div>
    </>
  );
};

export default Home;
