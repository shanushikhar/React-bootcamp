import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Course</Link>
        </li>
        <li>
          <Link to="/products/p2">Door mate</Link>
        </li>
        <li>
          <Link to="/products/p3">Udemy</Link>
        </li>
      </ul>
    </section>
  );
}
