import React, { useState } from "react";

const ModalContext = React.createContext({
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {}, // these methods are optional, just pass this to get the intelligence while using that in components
});

export const ModalContextProvider = (props) => {
  const [cartModal, setCartModal] = useState(false);

  const openModalHandler = () => {
    setCartModal(true);
  };

  const closeModalHandler = () => {
    setCartModal(false);
  };

  const cartValue = {
    modalIsOpen: cartModal,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ModalContext.Provider value={cartValue}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
