import React, { useState } from 'react'


const Hoc = (WrappedComp) => {
function Hoc(props) {
      const [count, setCount] = useState(0);
      const handleIncrement = () => {
            setCount(count + 1)
      }
  return (
    <div>
            <WrappedComp count={count} handleIncrement={handleIncrement} {...props}/>
    </div>
  )
}
      return Hoc;
}
export default Hoc
