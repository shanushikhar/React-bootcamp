import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [errorMsg, setErrorMsg] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      console.log("called");
      setErrorMsg(true);
      return;
    }

    props.addToCart(enteredAmountNumber);

    // console.log(typeof +inputAmountRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {errorMsg && <p>Please enter value between 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
