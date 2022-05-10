import React, { useState } from "react";

const ModalContext = React.createContext({
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {}, // these methods are optional, just pass this to get the intelligence while using that in components
});

export const ModalContextProvider = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen: modal,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
