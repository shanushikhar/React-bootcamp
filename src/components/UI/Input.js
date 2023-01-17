import React from "react";
import classes from "./Input.module.css";

const Input = (props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
    </div>
  );
};

export default Input;
