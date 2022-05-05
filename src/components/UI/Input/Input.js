import classes from "../../Login/Login.module.css";

const Input = (props) => {
  // we have to use props only to make this input field dynamic
  // if we use context api then it will be relevant to particular field's context.
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.fieldChangeHandler}
        onBlur={props.validateFormHandler}
      />
    </div>
  );
};

export default Input;
