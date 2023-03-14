import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();
  console.log({ error });
  let message = "An Error Occured...",
    title = "Something went wrong!";
  if (error.status == 500) {
    message = error.data.message;
  }

  if (error.status == 404) {
    title = "Page not found!!";
    message = "could not find the page..";
  }

  return (
    <>
      <MainNavigation />
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        {message}
      </div>
    </>
  );
}

export default Error;
