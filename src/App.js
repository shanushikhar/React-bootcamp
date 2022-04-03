import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productID">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

// our-domain.com/welcome => Welcome component
// our-domain.com/products => Products component
// our-domain.com/product-details/<anything> => ProductDetails

// if path is matching then both page will open in same page so to avoid we use exact and switch
// switch makes sure that only 1 router will be active at 1 thing and its based on which matches 1st
// sometimes we want to active multiple routes at same time
