import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "../src/components/UI/Notification";
import { uiAction } from "./components/store/ui-slice";
import { current } from "@reduxjs/toolkit";

let isFirstTime = true;

// status, title, message
function App() {
  const cartData = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.myui.uiNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFun = async () => {
      dispatch(
        uiAction({
          status: "pending",
          title: "Request pending",
          message: "Request is one the way",
        })
      );
      const data = await fetch(
        "https://hackathon-2639b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!data.ok) {
        throw new Error();
      }
      // const res = await data.json();
      dispatch(
        uiAction({
          status: "success",
          title: "Request success",
          message: "Request is completed",
        })
      );
    };

    if (isFirstTime) {
      isFirstTime = false;
      return;
    }

    asyncFun().catch((error) => {
      dispatch(
        uiAction({
          status: "error",
          title: "Request failed",
          message: "Something went wrong...",
        })
      );
    });
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
