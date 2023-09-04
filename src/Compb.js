import React from 'react'
import Hoc from './Hoc';

function Compb (props) {
      const { count, handleIncrement, name} = props;
  return (
    <div>
      <button onMouseOver={handleIncrement}> {name} Inc {count}</button>
    </div>
  )
}

export default Hoc(Compb,3);