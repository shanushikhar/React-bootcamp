import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../../helpers/Wrapper";

const AddUser = ({ getUserDetails }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length == 0) {
      setError({ name: "enter name", age: "enter age" });
      return;
    }
    if (+age < 1) {
      setError({ age: "enter age greater than 0" });
      return;
    }
    console.log({ username, age });
    getUserDetails(username, age);
    setUsername("");
    setAge("");
  };

  const getUserValue = (e) => {
    setUsername(e.target.value);
  };
  const getAgeValue = (e) => {
    setAge(e.target.value);
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
          <input
            value={username}
            onChange={getUserValue}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input value={age} onChange={getAgeValue} id="age" type="number" />
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
