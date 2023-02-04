import React from "react";
import { useNavigate } from "react-router";
import Header from "../components/UI/Header";

const Error = () => {
  const naviagte = useNavigate();
  function navigatehandler() {
    naviagte("/");
  }

  return (
    <>
      <Header />
      <main>
        <h1>Could not find the page</h1>
        <p>Something went wrong...</p>
        <button onClick={navigatehandler}>Go to home</button>
      </main>
    </>
  );
};

export default Error;
