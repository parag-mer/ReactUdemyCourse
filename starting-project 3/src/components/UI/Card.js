import React from "react";
import './Card.css'
import '../Users/AddUser.css';

export default function Card(props) {
  return <div className="card input">{props.children}</div>;
}
