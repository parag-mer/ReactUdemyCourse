import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";
import "./Card.css";
import  ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onconfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal card">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onconfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onconfirm = {props.onconfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title = {props.title} message = {props.message} onconfirm = {props.onconfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
}
