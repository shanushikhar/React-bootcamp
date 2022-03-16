import React, { useState } from "react";
import ErrorModel from "./components/UI/ErrorModel";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

export default function App() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  const getUserData = (username, age) => {
    setUsersData((data) => {
      return [...data, { name: username, age }];
    });
  };

  const getErrorModal = (e) => {
    setError(e);
  };

  const removeError = () => {
    console.log("error removed called");
    setError(null);
  };

  return (
    <div>
      <AddUser getError={getErrorModal} getUserDetails={getUserData} />
      <UserList users={usersData} />
      {error && <ErrorModel removeError={removeError} errorValue={error} />}
    </div>
  );
}
