import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";

const Root = () => {
  return (
    <>
      <Header />
      {/* Outlet is a place where Child component should render */}
      <Outlet />
    </>
  );
};

export default Root;
