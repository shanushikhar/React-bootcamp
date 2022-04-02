import React from "react";
import { useState } from "react";

function Child(props) {
  const [country, setCountry] = useState("");

  const handlerChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(country);
    props.onChangeCountry(country);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={country} onChange={handlerChange} />
        {/* <button type="submit">Add Expense</button> */}
        <input type="submit" value="submit val" />
        <h1>{country}</h1>
      </form>
    </div>
  );
}

export default Child;
