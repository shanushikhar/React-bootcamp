import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../../helpers/Wrapper";

const AddUser = ({ getUserDetails }) => {
  const [error, setError] = useState(null);

  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    let userName = inputNameRef.current.value;
    let userAge = inputAgeRef.current.value;

    if (userName.trim().length === 0 || userAge.trim().length == 0) {
      setError({ name: "enter name", age: "enter age" });
      return;
    }
    if (+userAge < 1) {
      setError({ age: "enter age greater than 0" });
      return;
    }

    getUserDetails(userName, userAge);
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };

  const removeError = () => {
    console.log("error removed called");
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModel removeError={removeError} errorValue={error} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={inputNameRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={inputAgeRef} id="age" type="number" />
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
