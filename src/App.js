import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/UI/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Rootlayour from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Rootlayour />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
