import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";
import "./Card.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onconfirm}></div>
      <Card className='modal card'>
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button  onClick={props.onconfirm} >Okay</Button>
        </footer>
      </Card>
      ;
    </div>
  );
}
