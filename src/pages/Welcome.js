import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Hello new user</p>
      </Route>
    </section>
  );
}
