import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function ErrorModel(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.removeError}>
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
      </div>
    </div>
  );
}

export default ErrorModel;
