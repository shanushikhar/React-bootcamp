import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = ({ getUserDetails, getError }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length == 0) {
      getError({ name: "enter name", age: "enter age" });
      return;
    }
    if (+age < 1) {
      getError({ age: "enter age greater than 0" });
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

  return (
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
  );
};

export default AddUser;
