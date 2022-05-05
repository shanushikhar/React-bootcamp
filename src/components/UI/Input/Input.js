import React, { useRef, useImperativeHandle } from "react";
import classes from "../../Login/Login.module.css";

// we have to use props only to make this input field dynamic
// if we use context api then it will be relevant to particular field's context.
const Input = React.forwardRef((props, ref) => {
  /**
        useImperativeHandle hook,has a strange name, but in the end it is a hook
        that allows us to use this Component or functionalities from inside this Component imperatively,
        which simply means not through the regular state props management,
        not by controlling the Component through state in the parent Component,
        but instead by directly calling or manipulating something in the Component programmatically.
     */

  const inputRef = useRef();

  const getFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      adjustFocus: getFocus,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.name}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.fieldChangeHandler}
        onBlur={props.validateFormHandler}
      />
    </div>
  );
});

export default Input;
