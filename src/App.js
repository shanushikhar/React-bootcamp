import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  /**
   *  it will save the function in React's internal storage
      and we'll always reuse that same function object
      when this component function executes.
   */

  /** no need to pass setShowParagraph as a dependency array
       * with help of Use Callback probably
          that this will never change so that this will always
          be the same function object.
       */

  /** so [] means
   * it has no dependencies
      and the data for always the same function object
      should be reused when the app component rerenders.
  */

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      {/* <DemoOutput show={toggleParagraphHandler} /> */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
