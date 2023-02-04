import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "../src/components/UI/Notification";
import { uiAction } from "./components/store/ui-slice";
import { current } from "@reduxjs/toolkit";
import { cartActions } from "./components/store/cart-actions";

let isFirstTime = true;

// status, title, message
function App() {
  const cartData = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.myui.uiNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstTime) {
      isFirstTime = false;
      return;
    }

    dispatch(cartActions(cartData));
  }, [cartData, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
