import React, { useState } from "react";

const ModalContext = React.createContext({
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {}, // these methods are optional, just pass this to get the intelligence while using that in components
});

export const ModalContextProvider = (props) => {
  return <>{props.children}</>;
};

export default ModalContext;
