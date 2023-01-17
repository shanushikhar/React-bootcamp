import { Fragment, useContext } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import ModalContext from "./store/modal-context";

function App() {
  const cartModal = useContext(ModalContext);

  return (
    <Fragment>
      {cartModal.modalIsOpen && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
