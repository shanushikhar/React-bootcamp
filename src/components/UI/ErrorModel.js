import React from "react";
import Reactdom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function ErrorModel(props) {
  function ErrorSection() {
    return <div className={classes.backdrop} onClick={props.removeError}></div>;
  }

  const Cardmodal = () => {
    return (
      <Card classname={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorValue.name}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorValue.age}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={props.removeError}>Close</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {Reactdom.createPortal(
        <ErrorSection />,
        document.getElementById("error-background")
      )}
      {Reactdom.createPortal(
        <Cardmodal />,
        document.getElementById("error-cardinfo")
      )}
    </>
  );
}

export default ErrorModel;
