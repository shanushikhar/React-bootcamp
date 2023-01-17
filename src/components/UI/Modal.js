import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import ModalContext from "../../store/modal-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const context = useContext(ModalContext);
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />

      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
