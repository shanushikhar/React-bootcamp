import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

function UserList({ users }) {
  return (
    <Card className={classes.details}>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
