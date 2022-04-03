import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/Quotes" />
      </Route>
      <Route path="/Quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/Quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}
