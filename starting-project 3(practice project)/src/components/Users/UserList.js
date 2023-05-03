import React from "react";
import Card from "../UI/Card";
import "../UI/Card.css";
import "./UserList.css";

export default function UserList(props) {
  return (
    <Card className='users card'>
      <ul>
        {props.users.map((u) => {
          return (
            <li key={u.id}>
              {u.name}( {u.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
