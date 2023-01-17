import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // all logic when adding item in card like length should be greater than 0, greater than 1 and lessa than 5
  // show error message if anything misses
  // pass the props value to parent

  return (
    <form className={classes.form}>
      <Input
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
      {/* {errorMsg && <p>Please enter value between 1 to 5</p>} */}
    </form>
  );
};

export default MealItemForm;
