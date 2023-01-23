import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let formIsValid = false;

  const inputIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !inputIsValid && enteredNameTouched;

  const emailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !emailIsValid && enteredEmailTouched;

  if (inputIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // extra check
    if (!enteredName) return;

    setEnteredEmail("");
    setEnteredName("");
    // after submission dont show error message until user do something
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
