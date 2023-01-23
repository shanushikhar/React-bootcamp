import { useState } from "react";

const SimpleInput = (props) => {
  // for instant validation & clearing value after submission => useState is best
  // get value during submission => ref is better (clearing value is also possible but not a good way to manupulate DOM directly)

  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  const checkEmptyValue = () => {
    if (input.trim() === "") {
      setError("Form can't be empty");
      return "not correct";
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // checkEmptyValue();
    const checking = checkEmptyValue();
    if (checking === "not correct") return;
    console.log(input, "submitted...");
  };

  const inputTouchHandler = () => {
    checkEmptyValue();
  };

  const inputHandler = (e) => {
    setInput(e.target.value.trim());
    setError(null);
  };

  const errorStyle = error ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={errorStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={inputTouchHandler}
          onChange={inputHandler}
          type="text"
          id="name"
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
