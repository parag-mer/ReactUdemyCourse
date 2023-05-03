import React from "react";
import './Card.css'
import '../Users/AddUser.css';

export default function Card(props) {
  return <div className={props.className}>{props.children}</div>;
}
