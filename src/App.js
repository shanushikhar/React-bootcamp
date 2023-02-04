import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/UI/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Rootlayour from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Rootlayour />,
    // absolute path start with / and if remove / then call it relative path
    children: [
      { index: true, element: <Home /> }, // path:''
      { path: "products", element: <Product /> },
      { path: "products/:productID", element: <ProductDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
