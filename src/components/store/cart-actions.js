import { getCartData } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const cartPostActions = (cartData) => {
  return async (dispatch) => {
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
      const res = await data.json();
      return res;
    };

    try {
      await asyncFun();
      dispatch(
        uiAction({
          status: "success",
          title: "Request success",
          message: "Request is completed",
        })
      );
    } catch (error) {
      dispatch(
        uiAction({
          status: "error",
          title: "Request failed",
          message: "Something went wrong...",
        })
      );
    }
  };
};

export const cartGetAction = () => {
  return async (dispatch) => {
    const asyncFun = async () => {
      const data = await fetch(
        "https://hackathon-2639b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!data.ok) {
        throw new Error();
      }
      const res = await data.json();
      return res;
    };

    try {
      const data = await asyncFun();
      console.log({ data });
      dispatch(
        getCartData({ items: data.items || [], totalItem: data.totalItem })
      );
    } catch (error) {
      dispatch(
        uiAction({
          status: "error",
          title: "Request failed",
          message: "No data found",
        })
      );
    }
  };
};
