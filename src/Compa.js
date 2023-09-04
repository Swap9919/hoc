import React from "react";
import Hoc from "./Hoc";
function Compa(props) {
  const { count, handleIncrement, name } = props;
  return (
    <div>
      <button onClick={handleIncrement}> {name} Inc {count}</button>
    </div>
  );
}

export default Hoc(Compa);
