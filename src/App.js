import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "../src/components/UI/Notification";
import {
  cartPostActions,
  cartGetAction,
} from "./components/store/cart-actions";

let isFirstTime = true;

// status, title, message
function App() {
  const cartData = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.myui.uiNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartGetAction());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstTime) {
      isFirstTime = false;
      return;
    }
    if (cartData.changeFromLocal) {
      dispatch(
        cartPostActions({
          items: cartData.items,
          totalItem: cartData.totalItem,
        })
      );
    }
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
