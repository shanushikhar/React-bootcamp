import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

import Child from "./FormTest";

export default function App() {
  const [usersData, setUsersData] = useState([]);

  const getUserData = (username, age) => {
    setUsersData((data) => {
      return [...data, { name: username, age }];
    });
  };

  return (
    <>
      <AddUser getUserDetails={getUserData} />
      <UserList users={usersData} />
      {/* for testing purpose only */}
      {/* <Child onChangeCountry={getCountry} /> */}
    </>
  );
}
