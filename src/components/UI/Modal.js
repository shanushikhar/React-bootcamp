import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import ModalContext from "../../store/modal-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const context = useContext(ModalContext);
  return <div className={classes.backdrop} onClick={context.closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
