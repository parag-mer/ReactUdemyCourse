import React from "react";
import Card from "../UI/Card";


export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age in years</label>
        <input id="age" type="number" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
